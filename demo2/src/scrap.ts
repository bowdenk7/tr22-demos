

class BasicCalc {
    public add() : this {
        return this;
    }
}

class SciCalc extends BasicCalc {
    public sin() : this {
        return this;
    }
}


let a = new SciCalc();


a.add().sin().add();