let interview=[];
let rejected=[];
const all_btn=document.getElementById('all_filter_btn');
const interview_btn=document.getElementById('interview_filter_btn');
const rejected_btn=document.getElementById('rejected_filter_btn');
const filtered_section=document.getElementById('filtered_section');
const hero_section=document.getElementById('hero_section');


function count(){
    const total=document.getElementById('hero_section');
    const total_count=document.getElementById('total_count');
    const count=total.children.length;
    total_count.innerText=count;
    const interview_count=document.getElementById('interview_count');
    const interviews=interview.length;
    interview_count.innerText=interviews;
    const rejected_count=document.getElementById('rejected_count');
    const rejections=rejected.length;
    rejected_count.innerText=rejections;
}
count();

function toggleStyle(id){
       all_btn.classList.add('bg-gray-300', 'text-black');
       interview_btn.classList.add('bg-gray-300', 'text-black');
       rejected_btn.classList.add('bg-gray-300', 'text-black');


        all_btn.classList.remove('bg-black', 'text-white');
    interview_btn.classList.remove('bg-black', 'text-white');
    rejected_btn.classList.remove('bg-black', 'text-white');
     const selected = document.getElementById(id);
     selected.classList.remove('bg-gray-300', 'text-black');
     selected.classList.add('bg-blue-500', 'text-white');
     console.log(selected);
     if(id=='interview_filter_btn'){
           hero_section.classList.add('hidden');
            filtered_section.classList.remove('hidden');
            render_interview();
     }else if(id=='all_filter_btn'){
      hero_section.classList.remove('hidden');
    filtered_section.classList.add('hidden');;
     }
     else if(id=='rejected_filter_btn'){
         hero_section.classList.add('hidden');
            filtered_section.classList.remove('hidden');
            render_rejected();
     }
}



const element=document.addEventListener("click",function(event){
    // const el=event.target.classList;
    // console.log(el);
    if(event.target.classList.contains('interview_btn')){
        const parent=event.target.parentNode.parentNode;
     const obj={
        title: parent.querySelector('.title').innerText,
        desc: parent.querySelector('.description').innerText,
        engineer_location: parent.querySelector('.engineer_location').innerText,
        enginner_type: parent.querySelector('.engineer_type').innerText,
        enginner_salary: parent.querySelector('.engineer_salary').innerText,
        status: 'Interview',
        experience: parent.querySelector('.experience').innerText
     }
    const update_status = parent.querySelector('.status');
    update_status.innerText = 'Interview';
    update_status.classList.remove('bg-red-200');
    update_status.classList.add('bg-green-200');
     const title=interview.find(item=> item.title==obj.title)
     if(!title){
         rejected = rejected.filter(item => item.title !== obj.title);

        interview.push(obj);
        count();
        if(!hero_section.classList.contains('hidden')){

        }else{
            render_interview();
        }
     }
     else{
        alert("You cannot add the same item");
     }
     
    }
    else  if(event.target.classList.contains('rejected_btn')){
         const parent=event.target.parentNode.parentNode;
     const obj={
        title: parent.querySelector('.title').innerText,
        desc: parent.querySelector('.description').innerText,
        engineer_location: parent.querySelector('.engineer_location').innerText,
        enginner_type: parent.querySelector('.engineer_type').innerText,
        enginner_salary: parent.querySelector('.engineer_salary').innerText,
        status: 'Rejected',
        experience: parent.querySelector('.experience').innerText
       
     }
    const update_status = parent.querySelector('.status');
    update_status.innerText = 'Rejected';
    update_status.classList.remove('bg-green-200');
    update_status.classList.add('bg-red-200');

     const title=rejected.find(item=> item.title==obj.title)
     if(!title){
             interview = interview.filter(item => item.title !== obj.title);

        rejected.push(obj);
        count();
        if(!hero_section.classList.contains('hidden')){

        }else{
            render_rejected();
        }
     }

    //  interview=interview.filter(item=> item.title!=obj.title)
    
    }
    
})

function render_interview(){
    filtered_section.innerHTML=' ';
    for(let item of interview){
    let div=document.createElement('div');
    div.innerHTML=`
     <div class="shadow-lg space-y-4 p-5 w-[80%] mx-auto">


    <div class="flex justify-between items-start">
      <div>
        <h2 class="title text-2xl font-extrabold">${item.title}</h2>
        <p class="description text-xl font-light">${item.desc}</p>
      </div>

      <i class="delete fa-regular fa-trash-can text-black-500 cursor-pointer"></i>
    </div>

    <div class="flex gap-2">
      <small class="engineer_location">${item.engineer_location}</small>
      <ul class="flex gap-4">
        <li class="engineer_type"><small>${item.enginner_type}</small></li>
        <li class="engineer_salary"><small>${item.enginner_salary}</small></li>
      </ul>
    </div>

    <span class="status text-black rounded-md p-2 ${item.status === 'Interview' ? 'bg-green-200' : 'bg-red-200'}">
      ${item.status}
    </span>

    <p class="experience text-sm font-bold">
    ${item.experience}
    </p>

    <div class="flex gap-2">
      <button class="interview_btn px-5 py-2 border border-green-400 text-green-600">
        INTERVIEW
      </button>
      <button class="rejected_btn px-5 py-2 border border-red-400 text-red-600">
        REJECTED
      </button>
    </div>

  </div>
    `
    filtered_section.appendChild(div);
 } 
}

function render_rejected(){
    filtered_section.innerHTML=' ';
    for(let item of rejected){
    let div=document.createElement('div');;
    div.innerHTML=`
     <div class="shadow-lg space-y-4 p-5 w-[80%] mx-auto">


    <div class="flex justify-between items-start">
      <div>
        <h2 class="title text-2xl font-extrabold">${item.title}</h2>
        <p class="description text-xl font-light">${item.desc}</p>
      </div>

      <i class="delete fa-regular fa-trash-can text-black-500 cursor-pointer"></i>
    </div>

    <div class="flex gap-2">
      <small class="engineer_location">${item.engineer_location}</small>
      <ul class="flex gap-4">
        <li class="engineer_type"><small>${item.enginner_type}</small></li>
        <li class="engineer_salary"><small>${item.enginner_salary}</small></li>
      </ul>
    </div>

    <span class="status text-black rounded-md p-2 ${item.status === 'Interview' ? 'bg-green-200' : 'bg-red-200'}">
      ${item.status}
    </span>

    <p class="experience text-sm font-bold">
     ${item.experience}
    </p>

    <div class="flex gap-2">
      <button class="interview_btn px-5 py-2 border border-green-400 text-green-600">
        INTERVIEW
      </button>
      <button class="rejected_btn px-5 py-2 border border-red-400 text-red-600">
        REJECTED
      </button>
    </div>

  </div>
    `
    filtered_section.appendChild(div);
 } 
}


