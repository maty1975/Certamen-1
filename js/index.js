
tinymce.init({
    selector: '#U-descripcion',
    height: 500,
    menubar: false,
    plugins: [
      'advlist autolink lists link image charmap print preview anchor',
      'searchreplace visualblocks code fullscreen',
      'insertdatetime media table paste code help wordcount'
    ],
    toolbar: 'undo redo | formatselect | ' +
    'bold italic backcolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'removeformat | help',
    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
  });
  
  const clientes= [];
  
  const montar = ()=>{

    let tabody = document.querySelector("#tablabody");
    tabody.innerHTML="";
    for(let v=0; v < clientes.length; ++v){

        let c=clientes[v];
        let tr=document.createElement("tr");
        let tdnombre = document.createElement("td");
        tdnombre.innerText =v.nombre;
        let tdhorario = document.createElement("td");
        tdhorario.innerText =v.horario;
        let tdvalor = document.createElement("td");
        tdvalor.innerText =v.valor;
        let icon = document.createElement("i");
        if ((v.horario == "desayuno")){
            v.valor >= 1000 && v.valor <= 10000;
        }else if ((v.horario == "almuerzo")){
            v.valor >= 10000 && v.valor <=20000;
        }else if ((v.horario == "once")){
            v.valor >= 5000 && v.valor <=15000;
        }else if ((v.horario == "cena")){
            v.valor > 15000;
        }
        if ((v.valor < 5000 && v.horario == "desayuno")){
            icon.classList.add("fas","fa-laugh-beam");
        }else{
            icon.classList.add("fas","fa-sad-tear");
        }
        if ((v.valor < 15000 && v.horario =="almuerzo")){
            icon.classList.add("fas","fa-laugh-beam");
        }else{
            icon.classList.add("fas","fa-sad-tear");
        }
        if ((v.valor < 10000 && v.horario == "once")){
            icon.classList.add("fas","fa-laugh-beam");
        }else{
            icon.classList.add("fas","fa-sad-tear");
        }
        if ((v.valor < 20000 && v.horario == "cena")){
            icon.classList.add("fas","fa-laugh-beam");
        }else{
            icon.classList.add("fas","fa-sad-tear");
        }
        let tdOferta = document.createElement("td");
        tdOferta.appendChild(icon);
        let tdDescripcion = document.createElement("td");
        tdDescripcion.innerHTML = v.descripcion;

        tr.appendChild(tdnombre);
        tr.appendChild(tdhorario);
        tr.appendChild(tdvalor);
        tr.appendChild(tdDescripcion);
        tr.appendChild(tdOferta);
        tabody.appendChild(tr);
    }
  }

  document.querySelector("#U-registrar").addEventListener("click", ()=>{
      let Nombre =  document.querySelector("#U-nombre").value;
      let horario = document.querySelector("#D-horario").value;
      let valor =   document.querySelector("#U-valor").value;
      let descripcion = tinymce.get("U-descripcion").getContent();

      let cliente={};
      cliente.nombre = Nombre;
      cliente.horario = horario;
      cliente.Valor = valor;
      cliente.descripcion = descripcion;

      clientes.push(cliente);
      montar();
      console.log(clientes);
      swal.fire("Listo","Registro de menu realizado","success")

  });
 