class Node {

   constructor(data,prev=null,next=null){
    this.prev;
    this.data;
    this.next
   }
};

class doublyLinkedlist {
     constructor(head = null,tail=null){
        this.head = head;
        this.tail = tail;
     }


};

doublyLinkedlist.prototype.insertAtBegining = function(data){
    let newNode = new Node(data,this.head,null);
    if(this.head){
      this.head.prev = newNode;
    };


    
 this.head = newNode;

 if(this.tail === null){
   this.tail = newNode;
 }
    
}


doublyLinkedlist.prototype.insertAtGivenNode = function(data,givenNode){
   const newNode = new Node(data);
   if(this.head === null){
      this.head = newNode;
      return;
   }
   let currentNode = this.head;
   while(currentNode.next!== null){
      if(currentNode.data === givenNode.data){
         let nextNode = currentNode.next
          currentNode.next = newNode;
          nextNode.prev = newNode;
      }else{
         currentNode = currentNode.next;
      }
   }

}
