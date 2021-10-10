const fill=document.querySelector('.fill');

const empties=document.querySelectorAll('.empty');

fill.addEventListener('dragstart',(e)=>{
    fill.className+=' hold';
    setTimeout(()=>{fill.className='invisible'},0);
})

fill.addEventListener('dragend',(e)=>{
    fill.className='fill'
})


empties.forEach((empty)=>{
    empty.addEventListener('dragover',(e)=>{
        e.preventDefault();
    });
    empty.addEventListener('dragenter',(e)=>{
        e.preventDefault();
        empty.className+=' hovered'
    });
    empty.addEventListener('dragleave',()=>{
        empty.className='empty'
    });
    empty.addEventListener('drop',()=>{
        empty.className='empty';
        empty.append(fill);
    });
})

