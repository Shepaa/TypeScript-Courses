    function MaxLength(maxLength: number) {
        return function <T extends {}>(target: T, propertyKey: string | symbol): any {

            let value: string;

            Reflect.defineProperty(target, propertyKey, {
                    get: function (): string {
                        return value;
                    },

                    set: function (newValue: string) {
                        if (newValue.length <= maxLength) {
                            value = newValue;
                        } else {
                            console.error(`Error: ${String(propertyKey)} should have a maximum length of ${maxLength}`);
                        }
                    },
                    enumerable: true,
                    configurable: true,
                }
            )
        }
    }

    function MinLength(minLength: number) {
        return function <T extends {}>(target: T, propertyKey: string | symbol): any {
            let value: string

            Reflect.defineProperty(target, propertyKey, {
                    get: function (): string {
                        return value;
                    },
                    set: function (newValue: string) {
                        if (newValue.length > minLength) {
                            value = newValue
                        } else {
                            console.error(`Error: ${String(propertyKey)} should have a minimum length of ${minLength}`);
                        }
                    },
                    enumerable: true,
                    configurable: true,
                }
            )
        }
    }

    function EmailDecorator<T extends {}>(target: T, propertyKey: string | symbol) {
        let value: any;

        Reflect.defineProperty(target, propertyKey, {
            get: function () {
                return value
            },
            set(newValue: string) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

                if (emailRegex.test(newValue)) {
                    value = newValue
                } else {
                    console.log(`Error: ${String(propertyKey)} should be a valid email address`)
                }
            },
            enumerable: true,
            configurable: true,
        })
    }

    class User {
        @MinLength(10)
        @MaxLength(20)
        @EmailDecorator
        email: string = ''
    }

    const user = new User();
    user.email = 'john.doe@example.com';
    console.log(user.email);

    user.email = 'short@e.c';
    user.email = 'toolongemailaddress@domain.com';
    user.email = 'invalidemail';