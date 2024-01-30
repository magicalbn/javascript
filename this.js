const contenct = {
    name: "nehal",

    print: function () {
        console.log(this.name);
    },
};

// contenct.print.call({name:"akshay"})

let newName = contenct.print.bind({ name: "kritika" });

newName();

function Stack() {
    const arr = [];
    this.push = (val) => {
        arr.push(val);
    };

    this.pop = () => {
        arr.pop();
    };

    this.getStack = () => {
        console.log(arr);
    };
}

const stack1 = new Stack();
const stack2 = new Stack();

stack1.push(1);
stack1.push(2);
stack1.push(4);
stack1.pop();
stack1.push(3);

stack2.push(10);
stack2.push(13);
stack2.pop();

stack1.getStack();
stack2.getStack();
