
function render(element,mainContainr){
    const ele=document.createElement(element.type);
    ele.innerHTML=element.children;
    // This is overheactic:
    // ele.setAttribute('href',element.prop.href);
    // ele.setAttribute('target',element.prop.target);

    for(p in element.prop){
        if(p==='children') continue;
        ele.setAttribute(p,element.prop[p]);
    }

    mainContainr.appendChild(ele);
}

const element={
    type: 'a',
    prop: {
        href: "https://chatgpt.com/c/690ddda3-b594-8323-8f83-bb2d09088027",
        target: "_blank"
    },
    children: "Click to play song"
}
const mainContainr=document.querySelector("#root");
render(element,mainContainr);
