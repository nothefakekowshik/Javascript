class node
{
    constructor(x)
    {
        this.data=x;
        this.next=null;
    }
}
class ll
{
    constructor()
    {
        this.head=null;
    }
    push(x)
    {
        if(this.head==null)
        {
            var new_node = new node(x)
            this.head = new_node;
        }
        else
        {
            var curr = this.head;
            while(curr.next!=null)
            {
                curr=curr.next;
            }
            curr.next = new node(x);
        }
    }
    print()
    {
        var curr = this.head;
        while(curr)
        {
            console.log(curr.data);
            curr=curr.next;
        }
    }
}

const o = new ll();
o.push(1);
o.push(2);
o.push(3);
o.print();

