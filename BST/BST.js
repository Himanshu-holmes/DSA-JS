
class BSTNode{
    constructor(key,left=null,right=null){
        this.key = key;
        this.left = left;
        this.right = right;
    }
}
class BST {
    constructor(root=null){
        this.root = root;
    }

    insertAtKey(key){
            if(this.root === null){
                this.root = new BSTNode(key);
                return
            };

            // make helper function
            const inserNode = (node,key) => {
               if(key < node.key){
                  if(node.left === null){
                    node.left = new BSTNode(key)
                  }else{
                    inserNode(node.left,key)
                  }
               }
               if(key > node.key){
                if(node.key === null){
                    node.right = new BSTNode(key);
                }else {
                    inserNode(node.right,key);
                }
                
               }
            }
            inserNode(this.root,key);
    }
    deleteAtKey(key){
    // make helper function
        const deleteFunc = (node,key) => {
            if(key < node.key){
                deleteFunc(node.left,key)
            }else if (key > node.right) {
                deleteFunc(node.right,key)
            }else{
                if(node.left == null && node.right){
                    return null
                }else if (node.left == null){
                    return node.right
                }else if (node.right == null){
                    return node.left
                }else{
                    let tempNode = this.findMin(node.right);
                    key
                }
            }
        }
    }
    
}