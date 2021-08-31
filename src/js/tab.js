const refs = {
    causesBtn: document.querySelector('.causes-btn'),
    standardizationBtn: document.querySelector('.standardization-btn'),
    methodologyBtn: document.querySelector('.methodology-btn'),

    causesList: document.querySelector('.causes-list'),
    standardizationList: document.querySelector('.standardization-list'),
    methodologyList: document.querySelector('.methodology-list')
}


refs.causesBtn.addEventListener('click', onCausesBtnClick)
refs.standardizationBtn.addEventListener('click', onStandardizationBtnClick)
refs.methodologyBtn.addEventListener('click', onMethodologyDtnClick)

function onCausesBtnClick() {
    addActiveClassCausesSection()
    switchOnCausesSection()
    switchOffStandardSection()
    switchOffMethodologySection()


}
function onStandardizationBtnClick() {
    addActiveClassStandardSection()
    switchOffCausesSection()
    switchOnStandardSection()
    switchOffMethodologySection()
}
function onMethodologyDtnClick() {
    addActiveClassMethodSection()
    switchOffCausesSection()
    switchOffStandardSection()
    switchOnMethodologySection()
}
////////////

function addActiveClassCausesSection() {
    refs.causesBtn.classList.add('active')
    refs.standardizationBtn.classList.remove('active')
    refs.methodologyBtn.classList.remove('active')



    
}
function addActiveClassStandardSection() {
        refs.causesBtn.classList.remove('active')
    refs.standardizationBtn.classList.add('active')
        refs.methodologyBtn.classList.remove('active')


    
}
function addActiveClassMethodSection() {
    refs.causesBtn.classList.remove('active')
    refs.standardizationBtn.classList.remove('active')
        refs.methodologyBtn.classList.add('active')
}
/////////////
function switchOnCausesSection() {
    refs.causesList.classList.remove('close')
        refs.causesList.classList.add('is-open')
}

function switchOffCausesSection() {
    refs.causesList.classList.add('close')
        refs.causesList.classList.remove('is-open')
}

function switchOnStandardSection() {
    refs.standardizationList.classList.remove('close')
    refs.standardizationList.classList.add('is-open')
}

function switchOffStandardSection() {
    refs.standardizationList.classList.add('close')
    refs.standardizationList.classList.remove('is-open')
}


function switchOnMethodologySection() {
    refs.methodologyList.classList.add('is-open')
    refs.methodologyList.classList.remove('close')
}

function switchOffMethodologySection() {
    refs.methodologyList.classList.add('close')
    refs.methodologyList.classList.remove('is-open')
}