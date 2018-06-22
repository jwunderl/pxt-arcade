/**
 * Corgi Platformer Blocks
 */
//% weight=100 color=#d2b48c icon="\uf188"
namespace corgi {
    let _player: Sprite;

    let _maxMoveVelocity: number = 50;
    let _gravity: number = 10;
    let _jumpVelocity: number = 85;
    let _maxJump: number = 12;
    let _jumpReset: number = 2;
    let _remainingJump: number = _maxJump;

    // current time / number of times updateSprite has been called,
    let _count = 0;
    // How many frames to remain on the same sprite within a group.
    // const _state_transition: number = 8; <--- Use this in pickNext if it gets fixed

    let _edge: number = 3;

    // Likely remove these when'constrain to screen' functionality is added
    let _ground: number;
    let _ceiling: number;
    let _leftWall: number;
    let _rightWall: number;

    let _script: string[] = [
        "bork",
        "bork bork",
        "pant",
        "wag"
    ];

    const _corgi_still: Image[] = [
        img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . 4 . . . 4 . . . . . .
            . . . . 4 f 4 d 4 f 4 . . . . .
            . . . . 4 f 4 4 4 f 4 . . . . .
            . . . . e 4 d 4 d 4 4 . . . . .
            . . . . 4 4 f 4 f 4 f . . . . .
            . . . d e 4 4 4 4 4 e d . . . .
            . . . d d 4 e d e 4 d d . . . .
        `,
        img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . 4 . . . 4 . . . . . .
            . . . . 4 f 4 d 4 f 4 . . . . .
            . . . . 4 f 4 4 4 f 4 . . . . .
            . . . . e 4 d 4 d 4 4 . . . . .
            . . . . 4 4 f e f 4 f . . . . .
            . . . . e 4 4 4 4 4 e . . . . .
            . . . d e d 4 e 4 d e d . . . .
            . . . d d d e d e d d d . . . .
        `,
        img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . 4 . . . 4 . . . . . .
            . . . . 4 f 4 d 4 f 4 . . . . .
            . . . . 4 f 4 4 4 f 4 . . . . .
            . . . . e 4 d 4 d 4 4 . . . . .
            . . . . 4 4 f 4 f 4 f . . . . .
            . . . . e 4 4 4 4 4 e . . . . .
            . . . d e d 4 a 4 d e d . . . .
            . . . d d d e d e d d d . . . .
        `,
        img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . 4 . . . 4 . . . . . .
            . . . . 4 f 4 d 4 f 4 . . . . .
            . . . . 4 f 4 4 4 f 4 . . . . .
            . . . . e 4 d 4 d 4 4 . . . . .
            . . . . 4 4 f 4 f 4 f . . . . .
            . . . . e 4 4 4 4 4 e . . . . .
            . . . d e d 4 a 4 d e d . . . .
            . . . d d d e a e d d d . . . .
        `,
        img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . 4 . . . 4 . . . . . .
            . . . . 4 f 4 d 4 f 4 . . . . .
            . . . . 4 f 4 4 4 f 4 . . . . .
            . . . . e 4 d 4 d 4 4 . . . . .
            . . . . 4 4 f 4 f 4 f . . . . .
            . . . . e 4 4 4 4 4 e . . . . .
            . . . d e d 4 a 4 d e d . . . .
            . . . d d d e d e d d d . . . .
        `,
        img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . 4 . . . 4 . . . . . .
            . . . . 4 f 4 d 4 f 4 . . . . .
            . . . . 4 f 4 4 4 f 4 . . . . .
            . . . . e 4 d 4 d 4 4 . . . . .
            . . . . 4 4 f 4 f 4 f . . . . .
            . . . . e 4 4 4 4 4 e . . . . .
            . . . d e d 4 4 4 d e d . . . .
            . . . d d d e d e d d d . . . .
        `,
    ];

    let _corgi_left: Image[] = [
        img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . 4 . . . 4 . . . . . . . . .
            . 4 f 4 d 4 f 4 . . . . . . . .
            . 4 f 4 4 4 f 4 . . . . . . . .
            . 4 4 d 4 d 4 4 . . . . . . . .
            . e 4 f 4 f 4 e . . . . e 4 f .
            . e 4 4 4 4 4 4 d . . . e 4 f .
            f d 4 4 4 4 4 d d e e e 4 4 4 .
            . 4 d d d 4 f d 4 4 4 4 4 4 . .
            . . 4 d d f f d d 4 4 4 4 4 4 .
            . . . . . d d d 4 4 f 4 f 4 4 .
            . . . . . . d 4 d 4 f f f 4 d d
            . . . . . . f . . . . . . . d f
        `,
        img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . 4 . . . 4 . . . . . . . . .
            . 4 f 4 d 4 f 4 . . . . . . . .
            . 4 f 4 4 4 f 4 . . . . . . . .
            . 4 4 d 4 d 4 4 . . . . e 4 f .
            . e 4 f 4 f 4 e . . . . e 4 f .
            . e 4 4 4 4 4 4 d e e e 4 4 4 .
            f d 4 4 4 4 4 d d 4 4 4 4 4 . .
            . 4 d d d 4 f d 4 4 4 4 4 4 4 .
            . . 4 d d f f d d 4 f 4 f 4 4 .
            . . . . . d d d 4 d f f f 4 d d
            . . . . . . d 4 d . . . . . d f
            . . . . . . f . . . . . . . . .
        `,
        img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . 4 . . . 4 . . . . . . . . .
            . 4 f 4 d 4 f 4 . . . . . . . .
            . 4 f 4 4 4 f 4 . . . . . . . .
            . 4 4 d 4 d 4 4 . . . . e 4 f .
            . e 4 f 4 f 4 e . . . . e 4 f .
            . e 4 4 4 4 4 4 d e e e 4 4 4 .
            f d 4 4 4 4 4 d d 4 4 4 4 4 . .
            . 4 d d d 4 f d 4 4 4 4 4 4 4 .
            . . 4 d d f f d d 4 f 4 f 4 4 .
            . . . . d d d 4 4 d f f f 4 d d
            . . . f d 4 . . . . . . . . d f
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
        `,
        img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . 4 . . . 4 . . . . . . . . .
            . 4 f 4 d 4 f 4 . . . . . . . .
            . 4 f 4 4 4 f 4 . . . . . . . .
            . 4 4 d 4 d 4 4 . . . . e 4 f .
            . e 4 f 4 f 4 e . . . . e 4 f .
            . e 4 4 4 4 4 4 d e e e 4 4 4 .
            f d 4 4 4 4 4 d d 4 4 4 4 4 . .
            . 4 d d d 4 f d 4 4 4 4 4 4 . .
            . . 4 d d f f d d 4 f 4 f 4 . .
            . . . . d d d 4 4 d f f f 4 d .
            . . . f d 4 . . . . . . 4 d d .
            . . . . . . . . . . . . . f . .
            . . . . . . . . . . . . . . . .
        `,
        img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . 4 . . . 4 . . . . . . . . .
            . 4 f 4 d 4 f 4 . . . . . . . .
            . 4 f 4 4 4 f 4 . . . . . . . .
            . 4 4 d 4 d 4 4 . . . . e 4 f .
            . e 4 f 4 f 4 e . . . . e 4 f .
            . e 4 4 4 4 4 4 d e e e 4 4 4 .
            f d 4 4 4 4 4 d d 4 4 4 4 4 . .
            . 4 d d d 4 f d 4 4 4 4 4 4 . .
            . . 4 d d f f d d 4 f 4 f 4 . .
            . . . . d 4 d 4 4 d f f f 4 d .
            . . . . d 4 . . . . . . 4 d d .
            . . . . . f . . . . . . . f . .
            . . . . . . . . . . . . . . . .
        `
    ];

    let _corgi_right: Image[] = [];
    for (let i: number = 0; i < _corgi_left.length; i++) {
        _corgi_right[i] = _corgi_left[i].clone();
        _corgi_right[i].flipX();
    }

    /**
     * Sets the rate of gravity; increase to fall faster, decrease to fall slower.
     * @param gravity rate of gravity that causes character to drop, eg: 10
     */
    //% group="Movement Properties"
    //% blockId=setGravity block="Set rate of gravity to %gravity"
    //% weight=50 blockGap=8
    export function setGravity(gravity: number): void {
        init();
        _gravity = gravity;
    }

    /**
     * Sets the maximum speed for moving horizontally
     * @param rate maximum rate of horizontal movement, eg: 50
     */
    //% group="Movement Properties"
    //% blockId=setHorizontalSpeed block="Set maximum horizontal speed to %rate"
    //% weight=50 blockGap=8
    export function setHorizontalSpeed(rate: number): void {
        init();
        _maxMoveVelocity = rate;
    }

    /**
     * Sets the initial jump velocity
     * @param rate initial jumping speed, eg: 85
     */
    //% group="Movement Properties"
    //% blockId=setJumpVelocity block="Set initial jump speed to %rate"
    //% weight=50 blockGap=8
    export function setJumpVelocity(rate: number): void {
        init();
        _jumpVelocity = rate;
    }

    /**
     * Sets the main sprite for the character
     * @param sprite to set as main sprite, eg: null
     */
    export function setSprite(sprite: Image = _corgi_still[0]): void {
        init();
        _player.setImage(sprite);
    }

    /**
     * Sets the script for the sprite to provided list
     * @param script for character to use, eg: ["bark", "pant"];
     */
    export function setScript(script: string[]): void {
        init();
        _script = script;
    }

    /**
     * Add the a new way phrase for the character to say
     * @param bark phrase to add to script, eg: "bark"
     */
    //% group="Speak"
    //% blockId=addScript block="Add %bark to script"
    //% weight=95 blockGap=5
    export function addToScript(bark: string): void {
        init();
        _script.push(bark);
    }

    /**
     * Return the sprite of the player.
     */
    //% group="Sprite"
    //% blockId=getSprite block="Get the Corgi Sprite"
    //% weight=95 blockGap=5
    export function getSprite(): Sprite {
        init();
        return _player;
    }

    /**
     * Have the character say one of the phrases in the script at random
     */
    //% group="Speak"
    //% blockId=bark block="Bark!"
    //% weight=95 blockGap=5
    export function bark(): void {
        init();
        _player.say(_script.get(Math.randomRange(0, _script.length)), 250);
    }

    /**
     * Make the character move in the direction indicated by the left and right arrow keys.
     * Generally called in an unbounded loop, as in "on game update"
     * @param decelerationRate rate at which corgi should maintain momentum after arrow keys have been released, eg: 0.7
     */
    //% group="Movement"
    //% blockId=horizontalMovement block="Update left and right movement with arrow keys"
    //% weight=100 blockGap=5
    export function horizontalMovement(decelerationRate: number = 0.7): void {
        init();
        let dir: number = controller.dx();

        // if (dir)     _player.vx = normalize(dir) * _maxMoveVelocity;
        // else         _player.vx = roundTowardsZero(_player.vx * decelerationRate);
        _player.vx = dir ? normalize(dir) * _maxMoveVelocity :
            roundTowardsZero(_player.vx * decelerationRate)
    }

    /**
     * Make the character jump when the up arrow key is pressed.
     * Generally called in an unbounded loop, as in "on game update"
     * @param WallGrabFallAcc Rate at which the player 'slips' / approachs wallGrabMaxSlip, eg: 0.2
     * @param wallGrabMaxSlip max fall rate when 'grabbing' a wall, eg: 30
     * @param wallJumpReset what proportion of the standard jump length to allow for a wall jump, eg: 0.7
     * @param wallJumpImpulse proportion of the standard jump impulse to provide for a wall jump, eg: 0.8
     */
    //% group="Movement"
    //% blockId=verticalMovement block="Jump if up arrow key is pressed"
    //% weight=100 blockGap=5
    export function verticalMovement(wallGrabFallAcc: number = 0.2,
        wallGrabMaxSlip: number = 30,
        wallJumpReset: number = 0.7,
        wallJumpImpulse: number = 0.8): void {
        init();
        // If the player has jump remaining, up is pressed, and we are not falling...
        if (_remainingJump > 0 && controller.up.isPressed() && _player.vy <= 0) {
            if (_player.vy === 0) _player.vy = -1 * _jumpVelocity;
            else _player.vy -= _gravity / 2;
            _remainingJump--;
        } else if (((Math.abs(_player.x - _leftWall) <= _jumpReset && controller.right.isPressed())
                || Math.abs(_player.x - _rightWall) <= _jumpReset && controller.left.isPressed())
                && controller.up.isPressed()) {
            _remainingJump = _maxJump * wallJumpReset;
            _player.vy = -wallJumpImpulse * _jumpVelocity;
        } else if ((_player.x == _leftWall && controller.left.isPressed()) ||
            _player.x == _rightWall && controller.right.isPressed()) {
            _player.vy = Math.clamp(0, wallGrabMaxSlip, _player.vy + wallGrabFallAcc);
        } else {
            _player.vy += _gravity;
        }
    }

    /**
     * Make sure that the main character stays within the screen.
     */
    //% group="Movement"
    //% blockId=boundCheck block="Make sure character stays on the screen"
    //% weight=100 blockGap=5
    export function boundCheck(): void {
        init();
        // Reset jump when near ground
        if (Math.abs(_player.y - _ground) <= _jumpReset) {
            _remainingJump = _maxJump;
        }

        if (_player.y >= _ground) {
            _player.y = _ground;
            _player.vy = Math.min(0, _player.vy);
        } else if (_player.y <= _ceiling) {
            _player.y = _ceiling;
            _player.vy = Math.max(0, _player.vy);
        }

        if (_player.x <= _leftWall) {
            _player.x = _leftWall;
            _player.vx = Math.max(0, _player.vx);
        } else if (_player.x >= _rightWall) {
            _player.x = _rightWall;
            _player.vx = Math.min(0, _player.vx);
        }
    }

    /**
     * Make the character change sprites when moving.
     * Generally called in an unbounded loop, as in "on game update"
     */
    //% group="Movement"
    //% blockId=updateSprite block="Change image when corgi is moving"
    //% weight=100 blockGap=5
    export function updateSprite(): void {
        init();
        _count++;

        if (_player.vx == 0) _player.setImage(pickNext(_corgi_still, 6));
        else if (_player.vx < 0) _player.setImage(pickNext(_corgi_left));
        else _player.setImage(pickNext(_corgi_right));
    }


    /** miscellaneous helper methods **/

    // Initialize state of corgi.
    // @param force whether or not to force reset state variables, rather than
    //             only when first made, eg: false
    function init(force: boolean = false) {
        if (!_player || force) {
            _player = sprites.create(_corgi_still[0], SpriteKind.Player);
            // _player.addMovementFrame(_corgi_img[1], sprites.MovementDirection.Right, true);
            // debug? Above seems to be backwards from expectaiton,
            // and doesn't properly reset corgi to standard frame after motion.

            _ground = screen.height - (_player.height / 2) - _edge;
            _ceiling = _player.height / 2;
            _leftWall = _player.width / 2 + _edge;
            _rightWall = screen.width - _leftWall;

            _player.x = (screen.width / 2) + (_player.width / 2);
            _player.y = _ground;
        }
    }

    // Round input towards 0; 1.4 becomes 1.0, -0.4 becomes 0.0
    function roundTowardsZero(input: number): number {
        return (input < 0 ? 1 : 0) + Math.floor(input);
    }

    // normalize input number to 0, 1, or -1
    function normalize(input: number): number {
        return input != 0 ? input / Math.abs(input) : 0;
    }

    // Grab the next sprite to use from the given array, based off the current _count
    function pickNext(input: Image[], state: number = 3): Image {
        return input[(_count / state) % input.length];
    }
}