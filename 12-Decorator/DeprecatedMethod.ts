function DeprecatedMethod(reason: string, replacementMethod?: string) {
    return function (target: Object, propertyKey: string | symbol, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;

        descriptor.value = function (...args: any[]) {
            console.log(`Warning: Method "${String(propertyKey)}" is deprecated. Reason: ${reason}`);

            if (replacementMethod) {
                console.log(`You can use "${replacementMethod}" instead.`);
            }
            return originalMethod.apply(this, args);
        };
    };
}

class MyClass {
    @DeprecatedMethod("This method is deprecated", "newMethod")
    oldMethod() {
        console.log("I'm the old method");
    }

    newMethod() {
        console.log("I'm the new method");
    }
}

new MyClass().oldMethod();



