import { RationManagement } from "../ration-management/ration-management";

export class PortionCalculator {

    constructor() {
        this.init();
        this.currentSize = ''
        this.rationManagement = new RationManagement()
    }

    init() {

            const dog_name = ''

            const portion_steps = [...document.getElementsByClassName('portion-step')]
            

            /*
            const dog_size = [...document.getElementsByClassName('dog_size')]
            //
            dog_size.forEach(element => {
                element.addEventListener('click', () => {
                    alert('test')
                })
            })
            */

            const size_steps = [...document.getElementsByClassName('size-step')]

            // Init button Listener
            const btns = [...document.getElementsByClassName('calculate-ration-js')]
            btns.forEach(element => {
                element.addEventListener('click', () => {
                    this.changeSection(portion_steps, "portion-step-2")
                    let subSize = this.getSubsizeByTab(this.currentSize)
                    const dog_heigth = document.getElementById('form-portion-weigth').value
                    console.log("CALCULANDO")
                    console.log(dog_heigth, this.currentSize, subSize)
                    this.calculateTotal(dog_heigth , this.currentSize, subSize)
                    window.scrollTo(0, 0);
                })
            })

            // Tab buttons listener
            const tab_btns = [...document.getElementsByClassName('dog-size')]
            tab_btns.forEach(element => {
                element.addEventListener('click', () => {

                    this.currentSize = element.getAttribute('target')

                    this.changeTabSize(size_steps, element.getAttribute("target"))
                })
            })

            // number Days
            const number_radios = [...document.getElementsByName("number-days")]
            number_radios.forEach(element => {
                element.addEventListener('click', ()=> {
                    const dog_heigth = document.getElementById('form-portion-weigth').value
                    let subSize = this.getSubsizeByTab(this.currentSize)
                    this.calculateTotal(dog_heigth , this.currentSize, subSize, element.value)
                })
            })
        
        
    }

    changeSection(sections, currentSection) {

        let showSection;
        let animation_section = document.getElementById("portion-step-0");
        // Hide Al sections
        sections.forEach(element => {
            element.style = "display: none"
            
            if(currentSection == element.id) {
                showSection = element
            }
        })

        animation_section.style = 'display: block'

        // Show animation section
        setTimeout(() => {
            animation_section.style = 'display: none'
            showSection.style = 'display: block'
        }, 2000)
    }

    changeTabSize(sections, currentSection) {
        sections.forEach(element => {
            element.style = "display: none"
            
            if(currentSection == element.id) {
                element.style = "display: block"
            }
        })

    }

    getSubsizeByTab(name) {
        const rates = document.getElementsByName(name);
        for (const iterator of rates) {
            if(iterator.checked) {
                return iterator.value
            }
        }
    }

    calculateTotal(dog_weigth, dog_size, dog_subsize, days = 30) {
        console.log("DAYS")
        console.log(days)
        const grs =  this.rationManagement.calculateTotal(dog_weigth, dog_size, dog_subsize)
        console.log("GR")
        console.log(grs)
        const units = this.rationManagement.calculateUnits(grs, days)
        document.getElementById('portion-result').innerText = grs 
        document.getElementById('portion-days').innerText = days
        document.getElementById('portion-units').innerText = units

        let flavors = {}

        console.log("UNITS BY PORTIONS")
        let quantityByUnits = this.getQuantityByUnits(null, units)

        let options1 = [...document.getElementsByClassName('item-1')]
        options1.forEach(element => {
            let item = JSON.parse(element.getAttribute('item'))
            let metaTags = element.getAttribute('meta_tags')
            item.flavor = metaTags
            item.quantity = 1;

            if(flavors[item.flavor] == undefined) {
                flavors[item.flavor] = [];
                flavors[item.flavor].push(item)
            } else {
                flavors[item.flavor].push(item)
            }
        })

        let options10 = [...document.getElementsByClassName('item-10')]
        options10.forEach(element => {
            let item = JSON.parse(element.getAttribute('item'))
            let metaTags = element.getAttribute('meta_tags')
            item.flavor = metaTags
            item.quantity = 10;

            if(flavors[item.flavor] == undefined) {
                flavors[item.flavor] = [];
                flavors[item.flavor].push(item)
            } else {
                flavors[item.flavor].push(item)
            }

        })

        let options20 = [...document.getElementsByClassName('item-20')]
        options20.forEach(element => {
            let item = JSON.parse(element.getAttribute('item'))
            let metaTags = element.getAttribute('meta_tags')
            item.flavor = metaTags
            item.quantity = 20;

            if(flavors[item.flavor] == undefined) {
                flavors[item.flavor] = [];
                flavors[item.flavor].push(item)
            } else {
                flavors[item.flavor].push(item)
            }

        })

        let options30 = [...document.getElementsByClassName('item-30')]
        options30.forEach(element => {
            let item = JSON.parse(element.getAttribute('item'))
            let metaTags = element.getAttribute('meta_tags')
            item.flavor = metaTags
            item.quantity = 30;

            if(flavors[item.flavor] == undefined) {
                flavors[item.flavor] = [];
                flavors[item.flavor].push(item)
            } else {
                flavors[item.flavor].push(item)
            }

        })

        let result_container = document.getElementById('portion-results')
        // CLEAN DOM
        result_container.innerHTML = ''
        
        for (const flavor of Object.keys(flavors)) {
            // Data
            let flavor_data = flavors[flavor]
            console.log(flavor_data)
            // Template
            let template = this.renderTemplateFlavor(flavor, flavor_data, quantityByUnits)
            
          
            // Add flavor
            result_container.innerHTML += `
                <div>
                    <div class="row mb-5">${template}</div> 
                <div>
            `
            
        }

        this.initButtonsListener();




        


    }

    renderTemplateFlavor(flavor, items, quantityByUnits) {
        let template = ``
        for (const iterator of items) {

            console.log("TEST:", quantityByUnits[iterator.quantity])
            if(quantityByUnits[iterator.quantity] != 0) {
                console.log(iterator)
                template += `
                    <div class="col-lg-4 col-md-6 flavor-${flavor}" flavor="${flavor}" quantity="${quantityByUnits[iterator.quantity]}" shopify_id="${iterator.variants[0].id}">
                        <img src='${iterator.images[0]}' width='150'>
                        <p>${iterator.title} <b style="font-size: 22px">x ${quantityByUnits[iterator.quantity]}</b></p>
                    </div>
                `
            }
        }

        template += `
            <div class="col-12 mt-3">
                <button class="btn btn-portion-side-cart-add" target="${flavor}" >Agregar MENÚ ${flavor}</button>
            </div>
            <hr>
        `

        return template
    }

    initButtonsListener() {
        const btns = [...document.getElementsByClassName('btn-portion-side-cart-add')];
        btns.forEach(async element => {
            element.addEventListener('click', async ()=> {
               let targetFlavor = element.getAttribute("target")
               let items = [...document.getElementsByClassName('flavor-'+targetFlavor)]
               await this.addCart(items)
            })
        })
    }

    async addCart(items) {
        for (const item of items) {
            let id = parseInt(item.getAttribute('shopify_id'))
            let quantity = parseInt(item.getAttribute('quantity'))    
            await this.side_cart.addItem(id, quantity)
        }
        
    }

    getQuantityByUnits(items, quantity) {
        let posible_values = [ 30, 20, 10, 1 ]
        let result = {}
        let total = quantity;
        for (const value of posible_values) {
            console.log(value)
            if(Math.trunc(total / value) == 0) {
                result[value] = 0
            } else {
                result[value] = Math.trunc(total / value)
                total = Math.abs(total - value)
            }

        }

        return result
    }

}