const refs = {
    btnProcedures: document.querySelector('.btn-procedures'),
    btnEducation: document.querySelector('.btn-education'),
    btnVIP: document.querySelector('.btn-vip'),
    proceduresList: document.querySelector('.procedures'),
    educationList: document.querySelector('.education'),
    vipList: document.querySelector('.vip'),
}


refs.btnProcedures.addEventListener('click', onProceduresBtnClick)
refs.btnEducation.addEventListener('click', onEducationBtnClick)
refs.btnVIP.addEventListener('click', onVipBtnClick)

function onProceduresBtnClick(e) {
    addActiveClassProceduresSection()
    switchOnProceduresSection()
    switchOffEducationSection()
    switchOffVipSection()
}
function onEducationBtnClick(e) {
    addActiveClassAducationSection()
    switchOffProceduresSection()
    switchOnEducationSection()
    switchOffVipSection()
}
function onVipBtnClick(e) {
    addActiveClassVipSection()
    switchOffProceduresSection()
    switchOffEducationSection()
    switchOnVipSection()
}




/////////

function switchOnVipSection() {
    refs.vipList.classList.remove('close')
        refs.vipList.classList.add('is-open')
}

function switchOffVipSection() {
    refs.vipList.classList.add('close')
        refs.vipList.classList.remove('is-open')
}

function switchOnEducationSection() {
    refs.educationList.classList.remove('close')
    refs.educationList.classList.add('is-open')
}

function switchOffEducationSection() {
    refs.educationList.classList.add('close')
    refs.educationList.classList.remove('is-open')
}


function switchOnProceduresSection() {
    refs.proceduresList.classList.add('is-open')
    refs.proceduresList.classList.remove('close')
}

function switchOffProceduresSection() {
    refs.proceduresList.classList.add('close')
    refs.proceduresList.classList.remove('is-open')
}

// функции добавляющие класс active на активные кнопки


function addActiveClassProceduresSection() {
    refs.btnProcedures.classList.add('active')
    refs.btnEducation.classList.remove('active')
    refs.btnVIP.classList.remove('active')
    
}
function addActiveClassAducationSection() {
     refs.btnEducation.classList.add('active')
    refs.btnProcedures.classList.remove('active')
            refs.btnVIP.classList.remove('active')
    
}
function addActiveClassVipSection() {
    refs.btnVIP.classList.add('active')
    refs.btnEducation.classList.remove('active')
    refs.btnProcedures.classList.remove('active')
}