class BinarySearchTree {
	constructor(value){
		this.value = value;
		this.left =  {};
		this.right = {};
	}
	insert(val, obj){
		var obj = obj || this

		if(val > obj.value){
			if(obj.right.value !== undefined){
				this.insert(val, obj.right)
			} else {
				obj.right.value = val;
				obj.right.right = {};
				obj.right.left  = {};
			}
		} else if( val < obj.value){
			if(obj.left.value !== undefined){
				this.insert(val, obj.left)
			} else {
				obj.left.value = val;
				obj.left.right = {};
				obj.left.left  = {};
			}
		}
	}
	contains(val, obj){
		var obj = obj || this;

		if(val === obj.value){
			return true;
		}else if(val > obj.value) {
			return this.contains(val, obj.right);
		}else if(val < obj.value) {
			return this.contains(val, obj.left);
		}else {
			return false;
		}
	}
	depthFirstLog(callBack, obj){
		obj = obj || this;
		if(obj.value !== undefined){
			callBack(obj.value);
		}	
		if (obj.left.value !== undefined) {
			this.depthFirstLog(callBack, obj.left);
		}
		if (obj.right.value !== undefined) {
			this.depthFirstLog(callBack, obj.right);
		}
	
	}
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
