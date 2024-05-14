function DepOrArr(clk) {
    let dep = document.getElementById("Dep_btn")
    let arr = document.getElementById("Arr_btn")
    let depTable = document.getElementById("Dep_table")
    let arrTable = document.getElementById("Arr_table")
    if (clk==0){
        dep.innerHTML='Departures<img src="https://kbp.aero/wp-content/themes/borispol-magenta/img/departure_yellow.svg" alt="">'
        dep.className='activ_dep'
        depTable.className = 'active_table'
        arr.innerHTML='Arrivals <img src="https://kbp.aero/wp-content/themes/borispol-magenta/img/arrival_white.svg" alt="">'
        arr.className ='off_arr'
        arrTable.className = 'off_table'
    }
    if (clk==1){
        dep.innerHTML= 'Departures<img src=" https://kbp.aero/wp-content/themes/borispol-magenta/img/departure_white.svg" alt="">'
        dep.className ='off_dep'
        depTable.className = 'off_table'
        arr.innerHTML ='Arrivals <img src="https://kbp.aero/wp-content/themes/borispol-magenta/img/arrival_yellow.svg" alt="">'
        arr.className='activ_arr'
        arrTable.className = 'active_table'
    }
}