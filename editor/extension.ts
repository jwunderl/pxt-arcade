/// <reference path="../node_modules/pxt-core/built/pxteditor.d.ts" />

namespace pxt.editor {
    function patchBlocks(pkgTargetVersion: string, dom: Element) {
        // Perform the following upgrades for sprite event blocks:
        // - Change variables_get_reporter shadows into argument_reporter_custom shadows for sprite
        //   event blocks
        // - Delete variables_get blocks that are connected to a shadow on a sprite event block
        // - If a variables_get block inside an event handler has the same name as an event handler
        //   argument name, change the variables_get block to an argument_reporter_custom block

        /*
        Old event blocks (variables_get_reporter):

        <block type="spritesoverlap">
            <value name="HANDLER_DRAG_PARAM_sprite">
                <shadow type="variables_get_reporter">
                    <field name="VAR">sprite</field>
                </shadow>
                <block type="variables_get">
                    <field name="VAR">myVariable</field>
                </block>
            </value>
            ...
            <value name="HANDLER_DRAG_PARAM_otherSprite">
                <shadow type="variables_get_reporter">
                    <field name="VAR">otherSprite</field>
                </shadow>
            </value>
            ...
            <statement name="HANDLER">
                <block type="spritesetpos">
                    <value name="sprite">
                        <block type="variables_get">
                            <field name="VAR">myVariable</field>
                        </block>
                    </value>
                    ...
                </block>
            </statement>
        </block>


        New event blocks (argument_reporter_custom):

        <block type="spritesoverlap" x="490" y="470">
            <value name="HANDLER_DRAG_PARAM_sprite">
                <shadow type="argument_reporter_custom">
                    <mutation typename="Sprite"></mutation>
                    <field name="VALUE">sprite</field>
                </shadow>
            </value>
            ...
            <value name="HANDLER_DRAG_PARAM_otherSprite">
                <shadow type="argument_reporter_custom">
                    <mutation typename="Sprite"></mutation>
                    <field name="VALUE">otherSprite</field>
                </shadow>
            </value>
            ...
            <statement name="HANDLER">
                <block type="spritesetpos">
                    <value name="sprite">
                        <block type="argument_reporter_custom">
                            <mutation typename="Sprite"></mutation>
                            <field name="VALUE">sprite</field>
                        </block>
                    </value>
                    ...
                </block>
            </statement>
        </block>
        */
        const allEventNodes = U.toArray(dom.querySelectorAll("block[type=spritesoverlap]"))
            .concat(U.toArray(dom.querySelectorAll("block[type=spritesoncreated]")))
            .concat(U.toArray(dom.querySelectorAll("block[type=spritesondestroyed]")))
            .concat(U.toArray(dom.querySelectorAll("block[type=spritesollisions]")));

        allEventNodes.forEach(node => {
            // Don't rewrite if already upgraded, i.e. if there are argument_reporter_custom
            // shadows already present
            if (node.querySelectorAll("shadow[type=argument_reporter_custom]").length > 0) {
                return;
            }

            const paramValues = U.toArray(node.children).filter(child => {
                return child.tagName == "value" && child.getAttribute("name").indexOf("HANDLER_DRAG_PARAM_") !== -1;
            });
            const statementsRoot = node.querySelector("statement[name=HANDLER]");
            const usedVariables = U.toArray(statementsRoot.querySelectorAll("block[type=variables_get]"));

            paramValues.forEach(value => {
                let oldVariableName = "";
                const connectedVarBlock = getChildBlock(value, "variables_get");

                if (connectedVarBlock) {
                    // A variable is connected to the shadow variable reporter; use the name for
                    // the argument reporter and delete the variable
                    const connectedVarField = getField(connectedVarBlock, "VAR");
                    oldVariableName = connectedVarField.textContent;
                    value.removeChild(connectedVarBlock);
                }

                const handlerVarShadow = getShadow(value, "variables_get_reporter");
                const handlerVarField = getField(handlerVarShadow, "VAR");
                const argReporterName = handlerVarField.textContent;
                oldVariableName = oldVariableName || argReporterName;
                changeVariableToSpriteReporter(handlerVarShadow, argReporterName);

                // Change all references to this variable inside the handler to argument reporters
                usedVariables.forEach(usedVarBlock => {
                    const usedVarField = getField(usedVarBlock, "VAR");
                    if (usedVarField && usedVarField.textContent === oldVariableName) {
                        // This variable is a reference to a handler parameter; change it to an
                        // argument reporter
                        changeVariableToSpriteReporter(usedVarBlock, argReporterName);
                    }
                });
            });
        });
    }

    function changeVariableToSpriteReporter(varBlockOrShadow: Element, reporterName: string) {
        const varField = getField(varBlockOrShadow, "VAR");
        varBlockOrShadow.setAttribute("type", "argument_reporter_custom");
        varField.setAttribute("name", "VALUE");
        varField.textContent = reporterName;
        varField.removeAttribute("variabletype");
        varField.removeAttribute("id");
        const mutation = varBlockOrShadow.ownerDocument.createElement("mutation");
        mutation.setAttribute("typename", "Sprite");
        varBlockOrShadow.insertBefore(mutation, varBlockOrShadow.firstChild);
    }

    function getField(parent: Element, name: string) {
        return getChildNode(parent, "field", "name", name);
    }

    function getShadow(parent: Element, type: string) {
        return getChildNode(parent, "shadow", "type", type);
    }

    function getChildBlock(parent: Element, type: string) {
        return getChildNode(parent, "block", "type", type);
    }

    function getChildNode(parent: Element, nodeType: string, idAttribute: string, idValue: string) {
        for (let i = 0; i < parent.children.length; i++) {
            const child = parent.children.item(i);
            if (child.tagName === nodeType && child.getAttribute(idAttribute) === idValue) {
                return child;
            }
        }
        return undefined;
    }

    initExtensionsAsync = function (opts: pxt.editor.ExtensionOptions): Promise<pxt.editor.ExtensionResult> {
        pxt.debug('loading arcade target extensions...')

        const res: pxt.editor.ExtensionResult = {
            blocklyPatch: patchBlocks
        };

        return Promise.resolve<pxt.editor.ExtensionResult>(res);
    }
}