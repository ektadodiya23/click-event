// fetch table....

let url = "json/pop.json";

async function getdata(type) {
    let url;
    if(type === 'population'){
        url = "json/pop.json"
    }
    if(type === 'language'){
        url = "json/lan.json"
    }
    await fetch(url).then((res) => {
        console.log(res);
        return res.json();
    }).then((data) => {
        console.log(data);

        // table...

        let data1 = " ";
        data.map((values) => {
            data1 +=
                `
            <table class="table">
                <tbody>
                    <tr>
                    <div class = "row">
                    <div class= "col-2">
                    <td>${type === "population" ? values.population : values.language}</td>
                    </div>
                   

                    <div class = "col-8">
                    <td>
                    <div class="progress">
                    <div class="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style="width:${values.percentage}">
                    </div></div>
                    </td>
                    </div>

                    <div class = "col-2">
                    <td>${values.percentage}</td>
                    </div>
                    </div>
                    </tr>
                    </tbody>
                    </table>
             `
        });
        document.getElementById('demo').innerHTML = data1;
    })
        .catch((err) => {
            console.log(err);
        });
}




