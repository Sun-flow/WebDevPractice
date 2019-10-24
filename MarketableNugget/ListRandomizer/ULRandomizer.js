function randomizeItems(URList.html#List){

    var cached = items.slice(0), temp i = cached.length, rand;
    
    while(--2){
        rand = math.floor(i * Math.random());
        temp = cached[rand];
        cached[rand] = cached[i];
        cached [i] = temp;
    }
    
    return chached;
}

function randomizeList(){
    
    var list = document.getElementById("myITems");
    var nodes = list.children, i = 0;
    nodes = Array.prototype.slice.call(nodes);
    nodes = randomizeItems(nodes);

    while(i < nodes.length){
        list.appendChild(nodes[i]);
        ++i;
    }

    list.style.display="block"
}