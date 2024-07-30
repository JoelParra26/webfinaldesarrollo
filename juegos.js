const iniciarJuegos = document.getElementById('iniciar-juegos');
let contadorActividades = 0;
iniciarJuegos.addEventListener('click', () => {
    
    if (contadorActividades >= 5) {
        alert('Has completado todas las actividades. La página se reiniciará.');
        location.reload(); 
        return; 
    }
    
    
    contadorActividades++;
    
    if (contadorActividades === 1) {
        
        const actividad1 = document.createElement('div');
        actividad1.innerHTML = `
        `;
        document.body.appendChild(actividad1);
        
        const comprobar1 = document.getElementById('comprobar-1');
        comprobar1.addEventListener('click', () => {
            const respuesta = document.getElementById('respuesta-1').value;
            alert(`Has ingresado el número: ${respuesta}`);
        });
    } else if (contadorActividades === 2) {
        
        const actividad2 = document.createElement('div');
        actividad2.innerHTML = `
            <h2>Suma y resta</h2>
            <p>5 + 2 =?</p>
            <input type="number" id="respuesta-2" placeholder="Escribe tu respuesta">
            <button id="comprobar-2">Comprobar</button>
        `;
        document.body.appendChild(actividad2);

        
        const comprobar2 = document.getElementById('comprobar-2');
        comprobar2.addEventListener('click', () => {
            const respuesta = document.getElementById('respuesta-2').value;
            if (respuesta === '7') {
                alert('¡Correcto!');
            } else {
                alert('¡Incorrecto!');
            }
        });
    } else if (contadorActividades === 3) {
        
        const actividad3 = document.createElement('div');
        actividad3.innerHTML = `
            <h2>Multiplicación</h2>
            <p>3 * 4 =?</p>
            <input type="number" id="respuesta-3" placeholder="Escribe tu respuesta">
            <button id="comprobar-3">Comprobar</button>
        `;
        document.body.appendChild(actividad3);

        const comprobar3 = document.getElementById('comprobar-3');
        comprobar3.addEventListener('click', () => {
            const respuesta = document.getElementById('respuesta-3').value;
            if (respuesta === '12') {
                alert('¡Correcto!');
            } else {
                alert('¡Incorrecto!');
            }
        });
    } else if (contadorActividades === 4) {
        const actividad4 = document.createElement('div');
        actividad4.innerHTML = `
            <h2>División</h2>
            <p>8 / 2 =?</p>
            <input type="number" id="respuesta-4" placeholder="Escribe tu respuesta">
            <button id="comprobar-4">Comprobar</button>
        `;
        document.body.appendChild(actividad4);
        const comprobar4 = document.getElementById('comprobar-4');
        comprobar4.addEventListener('click', () => {
            const respuesta = document.getElementById('respuesta-4').value;
            if (respuesta === '4') {
                alert('¡Correcto!');
            } else {
                alert('¡Incorrecto!');
            }
        });
    } else if (contadorActividades === 5) {
        const actividad5 = document.createElement('div');
        actividad5.innerHTML = `
            <h2>Pregunta de lógica</h2>
            <p>Si un tren va a 60 km/h y otro a 80 km/h, ¿cuál llegará primero?</p>
            <input type="text" id="respuesta-5" placeholder="Escribe tu respuesta">
            <button id="comprobar-5">Comprobar</button>
        `;
        document.body.appendChild(actividad5);
        const comprobar5 = document.getElementById('comprobar-5');
        comprobar5.addEventListener('click', () => {
            const respuesta = document.getElementById('respuesta-5').value;
            alert(`Has respondido: ${respuesta}`);
        });
    }
});