const AdvisorTable = document.getElementById("table-advisor")

const Advisor = [
    {
        id: 1,
        name: 'John Smith',
        email: 'john@smith.com',
        company: 'Labbit Pte Ltd',
        role: 'Director',
        fluffle: 'Bishan Fluffle',
        customer: 222,
        wallet: 250
    },
    {
        id: 2,
        name: 'Deal Name',
        email: 'Email',
        company: 'Labbit Inc.',
        role: 'Manager',
        fluffle: 'Bishan Fluffle',
        customer: 312,
        wallet: 250
    },
    {
        id: 3,
        name: 'Quiz Name',
        email: 'Email',
        company: 'Fluffle Inc.',
        role: 'Director',
        fluffle: 'Bishan Fluffle',
        customer: 214,
        wallet: 100
    },
]

Advisor.forEach(item => {
    let Row = ``;
    
    Row = `
        <tr class="worker">
            <th><img src="../../../assets/icon/Square.svg" alt=""></th>
            <th>${item.id}</th>
            <th>${item.name}</th>
            <th>${item.email}</th>
            <th>${item.company}</th>
            <th>${item.role}</th>
            <th>${item.fluffle}</th>
            <th>${item.customer}</th>
            <th>${item.wallet} <img src="../../../assets/icon/Carrot.svg" alt=""></th>
            <th>
                <img src="../../../assets/icon/Eye.svg" style="cursor: pointer;" alt="">
                <img src="../../../assets/icon/edit.svg" alt="">
                <img src="../../../assets/icon/icontrash.svg" alt="">
            </th>
        </tr>
    `
    if(item.id % 2 == 0){
        Row = `
        <tr class="worker" style="background: #f1f1f1">
            <th><img src="../../../assets/icon/Square.svg" alt=""></th>
            <th>${item.id}</th>
            <th>${item.name}</th>
            <th>${item.email}</th>
            <th>${item.company}</th>
            <th>${item.role}</th>
            <th>${item.fluffle}</th>
            <th>${item.customer}</th>
            <th>${item.wallet} <img src="../../../assets/icon/Carrot.svg" alt=""></th>
            <th>
                <img src="../../../assets/icon/Eye.svg" onclick="detail()" style="cursor: pointer;" alt="">
                <img src="../../../assets/icon/edit.svg" alt="">
                <img src="../../../assets/icon/icontrash.svg" alt="">
            </th>
        </tr>
    `
    }

    AdvisorTable.innerHTML += Row
})


function detail(){
    location.replace('../AdvisorDetail/index.html')
}


