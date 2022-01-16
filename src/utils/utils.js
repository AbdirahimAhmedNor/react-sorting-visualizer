//represent each single step required in sorting algoritm
class Step {
    constructor(_check=false, _compare=false, _swap=false, _final=false, _data=null) {
        this.check = _check;
        this.compare = _compare;
        this.swap = _swap;
        this.final = _final;
        this.data = _data;
    }

    static check( _data ) {
        return new Step(true, false, false, false, _data);
    }
    static compare( _data ) {
        return new Step(false, true, false,false, _data);
    }
    static swap( _data ) {
        return new Step(false, false, true, false, _data )
    }
    static final( _data ) {
        return new Step(false, false, false, true, _data);
    }

}

function swap(array, a, b) {
    const temp = array[a];
    array[a]=array[b];
    array[b]=temp;
}

module.exports = {
    Step,
    swap
}