async function getData(){
    const xs = []
    const ys = []

    const respone = await fetch('test.csv')
    const data = await respone.text()
    const rows = data.split('\n').slice(1) //slicing arr[0] -> data[0]
    rows.forEach(element => {
        const columns = element.split(',')
        const year = columns[0]
        const temp = columns[1]
        xs.push(year)
        ys.push(parseFloat(temp) + 14)
        
        //console.log(year, temp)
    })
    return {xs, ys}
}

async function chartIt(){
    const ctx = document.getElementById('myChart')
    const data = await getData()

    new Chart(ctx, {
        type: 'line', //'bar'
        data: {
          labels: data.xs,
          datasets: [{
            label: 'Combined Land-Surface Air and Sea Water Temp in C°',
            data: data.ys,
            borderColor:'rgba(0,53,255,.9)',
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
                beginAtZero: true,
            }
          }
        }
      })
}


//the CSV FILE LOCATED: https://data.giss.nasa.gov/gistemp/
chartIt()




