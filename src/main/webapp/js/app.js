$(document).ready(function () {
    console.log('el formulario funciona');



    $('#generar_informe').click(()=>{
        console.log("GENERO EL INFORME");
                const nombre2 = document.getElementsByName("nombre");

                //Recogemos las variables normales
        const nombre = $("#nombre").val();
        const nhc= $("#nhc").val();
        const edad= $("#edad").val();
		const sexo = $('[name="sexo"]:checked').attr("id");
		
		//Variables de lobulo izdo
        const apIzdo= $("#lobulo_izq_ap").val();
        const tIzdo= $("#lobulo_izq_t").val();
        const ccIzdo= $("#lobulo_izq_cc").val();
		const ecoIzdo =$('[name="lobulo_izq_eco"]:checked').attr("id");
		const vascuIzdo = $('[name="lobulo_izq_vasc"]:checked').attr("id");
		const lobectomiaIzdo = document.getElementById("lobulo_izq_lobectomia");
		const comentarioLobuloIzdo = $("#lobulo_izdo_comentario").val();
        
		//Variables de Istmo
		const apIstmo = $("#istmo_ap").val();
		const comentarioIstmo = $("#istmos_comentario").val();
		const istmectomia = document.getElementById("istmo_lobectomia");
		
		//Variables de lobulo drcho 
		const apDcho= $("#lobulo_drc_ap").val();
        const tDcho= $("#lobulo_drc_t").val();
        const ccDcho= $("#lobulo_drc_cc").val();
		const ecoDcho =$('[name="lobulo_drc_eco"]:checked').attr("id");
		const vascuDcho = $('[name="lobulo_drc_vasc"]:checked').attr("id");
		const lobectomiaDcho = document.getElementById("lobulo_drc_lobectomia");
		const comentarioLobuloDcho = $("#lobulo_izdo_comentario").val();
		
		//Variables de adenopatias
		const adenopatias = $('[name="adenopatias_laterales"]:checked').val();
		
		//Variable tipo array con los nodulos
		const ListaNodulos = document.getElementsByClassName("nodulo");
		
                  // Comprobador    console.log(`${nombre} ${nhc}`);

            //Recogemos variables radio
        //const nodulo1_lobulo = $('[name="nodulo1_lobulo"]:checked').val();
        
        //const lobulo_izq_eco = $('[name="lobulo_izq_eco"]:checked').attr("id");





        //<label for="lobulo_izq_lobectomia"><input type="checkbox" name="lobulo_izq_lobectomia" id="lobulo_izq_lobectomia"> Lobectom�a</label>

        //Recogemos variables check
        //const nodulo1_loc_superior = $("#nodulo1_loc_superior").val();
        //const lobulo_izq_lobectomia = $("#lobulo_izq_lobectomia").val();


        //Declarmos los textos del if1
                /*let texto1 = "";

        if($("#lobulo_izq_lobectomia").is(":checked")){
              texto1 = 'Lobectomia al canto';
        }else{
              texto1 = 'Te libraste de la lobectomia';
        };*/
		
		let textoIzdo = ``;
		if(lobectomiaIzdo.checked){
			textoIzdo = `EL paciente presenta una lobectomia en el Lóbulo Izquierdo<br><br>`;
		}else{
			textoIzdo += `Nodulos en el lobulo Izquierdo: <br><br>`;
			for(let i = 0; i < ListaNodulos.length; i++){
				
				const nodulo = ListaNodulos[i];
				const numNodulo = i+1;
				//Variables del nodulo
				const lobulo = $(`[name = "nodulo${numNodulo}_lobulo"]:checked`).val();
				
				if(lobulo == "Izquierdo"){
					const apNoduloIzdo = $(`#nodulo${numNodulo}_ap`).val();
					const tNoduloIzdo = $(`#nodulo${numNodulo}_t`).val();
					const ccNoduloIzdo = $(`#nodulo${numNodulo}_cc`).val();
					
					const transversalIzdo = $(`[name="nodulo${numNodulo}_ctrans"]:checked`).val();
					let textoTransversal = ``;
					if(parseInt(transversalIzdo, 10)==1){
						textoTransversal = `, transversal`;
					}else if(parseInt(transversalIzdo, 10)==0){
						textoTransversal = `, NO transversal`;
					};
					
					const localizacionIzdo=[];
					let textoLocalizacion = ``;
					if($(`#nodulo${numNodulo}_loc_superior`).prop('checked')){
							localizacionIzdo.push(" Superior");
						};
					if($(`#nodulo${numNodulo}_loc_medio`).prop('checked')){
							localizacionIzdo.push(" Medio");
						};
					if($(`#nodulo${numNodulo}_loc_inferior`).prop('checked')){
							localizacionIzdo.push(" Inferior");
						};
					if($(`#nodulo${numNodulo}_loc_anterior`).prop('checked')){
							localizacionIzdo.push(" Anterior");
						};
					if($(`#nodulo${numNodulo}_loc_posterior`).prop('checked')){
							localizacionIzdo.push(" Posterior");
						};
					if($(`#nodulo${numNodulo}_loc_medial`).prop('checked')){
							localizacionIzdo.push(" Medial");
						};
					if($(`#nodulo${numNodulo}_loc_lateral`).prop('checked')){
							localizacionIzdo.push(" Lateral");
						};
					textoLocalizacion = `Localizacion: ${localizacionIzdo}`
					
					const ecogenicidadIzdo = $(`#nodulo${numNodulo}_ecogene option:selected`).attr("label");
					const composicionIzdo = $(`#nodulo${numNodulo}_composicion option:selected`).attr("label"); 
					const haloIzdo = $(`#nodulo${numNodulo}_halo option:selected`).attr("label");
					const margenIzdo = $(`#nodulo${numNodulo}_margen option:selected`).attr("label");
					
					const reverberacionIzdo = $(`[name="nodulo${numNodulo}_reverberacion"]:checked`).val();
					let textoReverberacion = ``;
					if(parseInt(reverberacionIzdo,10) == 1){
						textoReverberacion = `El paciente presenta artefactos de reverberación.`;
					}else if(parseInt(reverberacionIzdo,10) == 0){
						textoReverberacion = `El paciente NO presenta artefactos de reverberación.`;
					};
					
					const calcificacionesIzdo = $(`[name="nodulo${numNodulo}_calcificaciones1"]:checked`).val();
					let textoCalcificaciones = ``;
					if(parseInt(calcificacionesIzdo, 10) == 1){
						
						const valoresCalcificacionesIzdo = [];
						if($(`#nodulo${numNodulo}_microcalcificaciones`).prop('checked')){
							valoresCalcificacionesIzdo.push(" Microcalcificaciones");
						};
						if($(`#nodulo${numNodulo}_macro_intranodulares`).prop('checked')){
							valoresCalcificacionesIzdo.push(" Macrocalcificaciones Intranodulares");
						};
						if($(`#nodulo${numNodulo}_macro_perifericas`).prop('checked')){
							valoresCalcificacionesIzdo.push(" Macrocalcificaciones Periféricas");
						};
						if($(`#nodulo${numNodulo}_macro_peri_interrumpidas`).prop('checked')){
							valoresCalcificacionesIzdo.push(" Macrocalcificaciones Periféricas Interrumpidas");
						};
						textoCalcificaciones = `El paciente presenta las siguientes calcificaciones: ${valoresCalcificacionesIzdo}`;
					}else if(parseInt(calcificacionesIzdo, 10) == 0){
						textoCalcificaciones = `El paciente NO presenta calcificaciones.`;
					};
					
					const extensionextraIzdo = $(`[name="nodulo${numNodulo}_extensionextra1"]:checked`).val();
					let textoExtension = ``;
					if(parseInt(extensionextraIzdo, 10) == 1){
						
						const valoresExtensionIzdo = [];
						if($(`#nodulo${numNodulo}_extensionextra_anterior`).prop('checked')){
							valoresExtensionIzdo.push(" Anterior");
						};
						if($(`#nodulo${numNodulo}_extensionextra_posterior`).prop('checked')){
							valoresExtensionIzdo.push(" Posterior");
						};
						if($(`#nodulo${numNodulo}_extensionextra_medial`).prop('checked')){
							valoresExtensionIzdo.push(" Medial");
						};
						if($(`#nodulo${numNodulo}_extensionextra_lateral`).prop('checked')){
							valoresExtensionIzdo.push(" Lateral");
						};
						textoExtension = `El nódulo presenta las siguientes extensiones extratiroideas: ${valoresExtensionIzdo}`;
						
					}else if(parseInt(extensionextraIzdo, 10) == 0){
						textoExtension = `El nódulo NO presenta extensión extratiroidea`;
					};
					
					const vascularizacionIzdo = $(`#nodulo${numNodulo}_vascularizacion option:selected`).attr("label");
					let textoVascularizacion = ``;
					if(vascularizacionIzdo == "Periférica" || vascularizacionIzdo == "Central" || vascularizacionIzdo == "Mixta"){
						const vascularizacionTipoIzdo = $(`#nodulo${numNodulo}_tipo_periferica option:selected`).attr("label");
						textoVascularizacion = `Vascularización: ${vascularizacionIzdo} --> ${vascularizacionTipoIzdo}`;
					}else{
						textoVascularizacion = `Vascularización: ${vascularizacionIzdo}`;
					};
					
					const acrIzdo =$(`#acrValor${numNodulo}`).text();
					const eu_tiradsIzdo = $(`#euValor${numNodulo}`).text();
					const ataIzdo = $(`#ataValor${numNodulo}`).text();
					
					const comentarioNoduloIzdo = $(`#nodulo${numNodulo}_observaciones`).val();
					
					const biopsiadoIzdo = $(`[name="nodulo${numNodulo}_biopsiado"]:checked`).val();
					let textoBiopsiado = ``;
					if(parseInt(biopsiadoIzdo, 10)==1){
						const nPasesIzdo = $(`#nodulo${numNodulo}_biopsiado_pases`).val();
						const dAgujaIzdo = $(`#nodulo${numNodulo}_biopsiado_daguja`).val();
						
						const valoresTecnicaIzdo = [];
						if($(`#nodulo${numNodulo}_biopsiado_tecnica_capilar`).prop('checked')){
							valoresTecnicaIzdo.push(" Capilaridad");
							};
						if($(`#nodulo${numNodulo}_biopsiado_tecnica_aspirar`).prop('checked')){
							valoresTecnicaIzdo.push(" Aspiración");	
							};
						
						const nCristalesAlcoholIzdo = $(`#nodulo${numNodulo}_biopsiado_cfijadoalcohol`).val();
						const nCristalesSecoIzdo = $(`#nodulo${numNodulo}_biopsiado_cfijadoseco`).val();
						const comentarioBiopsiaIzdo = $(`#nodulo${numNodulo}_biopsiado_observaciones`).val();
						textoBiopsiado = `Se ha realizado una biopsia sobre el nódulo:<br>
											Número de pases: ${nPasesIzdo}<br>
											Diámetro de aguja: ${dAgujaIzdo}<br>
											Técnica: ${valoresTecnicaIzdo}<br>
											Número de cristales fijados en alcohol: ${nCristalesAlcoholIzdo}<br>
											Número de cristales fijados en seco: ${nCristalesSecoIzdo}<br>
											Observaciones: ${comentarioBiopsiaIzdo}`;
											
					}else if(parseInt(biopsiadoIzdo, 10)==0){
						textoBiopsiado = `El nódulo no está biopsiado`;
					};
					
					textoIzdo += `Nódulo ${numNodulo} de dimensiones ${apNoduloIzdo} x ${tNoduloIzdo} x ${ccNoduloIzdo}${textoTransversal}<br>
					${textoLocalizacion}<br>
					Ecogenicidad: ${ecogenicidadIzdo}<br>
					Composición: ${composicionIzdo}<br>
					Halo: ${haloIzdo}<br>
					Margen: ${margenIzdo}<br>
					${textoReverberacion}<br> 
					${textoCalcificaciones}<br>
					${textoExtension}<br>
					${textoVascularizacion}<br>
					ACR--> ${acrIzdo}<br>
					EU-TIRADS--> ${eu_tiradsIzdo}<br>
					ATA--> ${ataIzdo}<br>
					Observaciones: ${comentarioNoduloIzdo}<br>
					${textoBiopsiado}<br><br>`; 
				};
			};
		};
		
		
		let textoIstmo = ``;
		if(istmectomia.checked){
			textoIstmo = `El paciente presenta una Istmectomia<br>`;
		}else{
			textoIstmo = `Nodulos en el Istmo: <br><br>`;
			for(let i = 0; i < ListaNodulos.length; i++){
				
				const nodulo = ListaNodulos[i];
				const numNodulo = i+1;
				//Variables del nodulo
				const lobulo = $(`[name = "nodulo${numNodulo}_lobulo"]:checked`).val();
				
				if(lobulo == "Istmo"){
					const apNoduloIstmo = $(`#nodulo${numNodulo}_ap`).val();
					const tNoduloIstmo = $(`#nodulo${numNodulo}_t`).val();
					const ccNoduloIstmo = $(`#nodulo${numNodulo}_cc`).val();
					
					const transversalIstmo = $(`[name="nodulo${numNodulo}_ctrans"]:checked`).val();
					let textoTransversal = ``;
					if(parseInt(transversalIstmo, 10)==1){
						textoTransversal = `, transversal`;
					}else if(parseInt(transversalIstmo, 10)==0){
						textoTransversal = `, NO transversal`;
					};
					
					const localizacionIstmo=[];
					let textoLocalizacion = ``;
					if($(`#nodulo${numNodulo}_loc_superior`).prop('checked')){
							localizacionIstmo.push(" Superior");
						};
					if($(`#nodulo${numNodulo}_loc_medio`).prop('checked')){
							localizacionIstmo.push(" Medio");
						};
					if($(`#nodulo${numNodulo}_loc_inferior`).prop('checked')){
							localizacionIstmo.push(" Inferior");
						};
					if($(`#nodulo${numNodulo}_loc_anterior`).prop('checked')){
							localizacionIstmo.push(" Anterior");
						};
					if($(`#nodulo${numNodulo}_loc_posterior`).prop('checked')){
							localizacionIstmo.push(" Posterior");
						};
					if($(`#nodulo${numNodulo}_loc_medial`).prop('checked')){
							localizacionIstmo.push(" Medial");
						};
					if($(`#nodulo${numNodulo}_loc_lateral`).prop('checked')){
							localizacionIstmo.push(" Lateral");
						};
					textoLocalizacion = `Localizacion: ${localizacionIstmo}`
					
					const ecogenicidadIstmo = $(`#nodulo${numNodulo}_ecogene option:selected`).attr("label");
					const composicionIstmo = $(`#nodulo${numNodulo}_composicion option:selected`).attr("label"); 
					const haloIstmo = $(`#nodulo${numNodulo}_halo option:selected`).attr("label");
					const margenIstmo = $(`#nodulo${numNodulo}_margen option:selected`).attr("label");
					
					const reverberacionIstmo = $(`[name="nodulo${numNodulo}_reverberacion"]:checked`).val();
					let textoReverberacion = ``;
					if(parseInt(reverberacionIstmo,10) == 1){
						textoReverberacion = `El paciente presenta artefactos de reverberación.`;
					}else if(parseInt(reverberacionIstmo,10) == 0){
						textoReverberacion = `El paciente NO presenta artefactos de reverberación.`;
					};
					
					const calcificacionesIstmo = $(`[name="nodulo${numNodulo}_calcificaciones1"]:checked`).val();
					let textoCalcificaciones = ``;
					if(parseInt(calcificacionesIstmo, 10) == 1){
						
						const valoresCalcificacionesIstmo = [];
						if($(`#nodulo${numNodulo}_microcalcificaciones`).prop('checked')){
							valoresCalcificacionesIstmo.push(" Microcalcificaciones");
						};
						if($(`#nodulo${numNodulo}_macro_intranodulares`).prop('checked')){
							valoresCalcificacionesIstmo.push(" Macrocalcificaciones Intranodulares");
						};
						if($(`#nodulo${numNodulo}_macro_perifericas`).prop('checked')){
							valoresCalcificacionesIstmo.push(" Macrocalcificaciones Periféricas");
						};
						if($(`#nodulo${numNodulo}_macro_peri_interrumpidas`).prop('checked')){
							valoresCalcificacionesIstmo.push(" Macrocalcificaciones Periféricas Interrumpidas");
						};
						textoCalcificaciones = `El paciente presenta las siguientes calcificaciones: ${valoresCalcificacionesIstmo}`;
					}else if(parseInt(calcificacionesIstmo, 10) == 0){
						textoCalcificaciones = `El paciente NO presenta calcificaciones.`;
					};
					
					const extensionextraIstmo = $(`[name="nodulo${numNodulo}_extensionextra1"]:checked`).val();
					let textoExtension = ``;
					if(parseInt(extensionextraIstmo, 10) == 1){
						
						const valoresExtensionIstmo = [];
						if($(`#nodulo${numNodulo}_extensionextra_anterior`).prop('checked')){
							valoresExtensionIstmo.push(" Anterior");
						};
						if($(`#nodulo${numNodulo}_extensionextra_posterior`).prop('checked')){
							valoresExtensionIstmo.push(" Posterior");
						};
						if($(`#nodulo${numNodulo}_extensionextra_medial`).prop('checked')){
							valoresExtensionIstmo.push(" Medial");
						};
						if($(`#nodulo${numNodulo}_extensionextra_lateral`).prop('checked')){
							valoresExtensionIstmo.push(" Lateral");
						};
						textoExtension = `El nódulo presenta las siguientes extensiones extratiroideas: ${valoresExtensionIstmo}`;
						
					}else if(parseInt(extensionextraIstmo, 10) == 0){
						textoExtension = `El nódulo NO presenta extensión extratiroidea`;
					};
					
					const vascularizacionIstmo = $(`#nodulo${numNodulo}_vascularizacion option:selected`).attr("label");
					let textoVascularizacion = ``;
					if(vascularizacionIstmo == "Periférica" || vascularizacionIstmo == "Central" || vascularizacionIstmo == "Mixta"){
						const vascularizacionTipoIstmo = $(`#nodulo${numNodulo}_tipo_periferica option:selected`).attr("label");
						textoVascularizacion = `Vascularización: ${vascularizacionIstmo} --> ${vascularizacionTipoIstmo}`;
					}else{
						textoVascularizacion = `Vascularización: ${vascularizacionIstmo}`;
					};
					
					const acrIstmo =$(`#acrValor${numNodulo}`).text();
					const eu_tiradsIstmo = $(`#euValor${numNodulo}`).text();
					const ataIstmo = $(`#ataValor${numNodulo}`).text();
					
					const comentarioNoduloIstmo = $(`#nodulo${numNodulo}_observaciones`).val();
					
					const biopsiadoIstmo = $(`[name="nodulo${numNodulo}_biopsiado"]:checked`).val();
					let textoBiopsiado = ``;
					if(parseInt(biopsiadoIstmo, 10)==1){
						const nPasesIstmo = $(`#nodulo${numNodulo}_biopsiado_pases`).val();
						const dAgujaIstmo = $(`#nodulo${numNodulo}_biopsiado_daguja`).val();
						
						const valoresTecnicaIstmo = [];
						if($(`#nodulo${numNodulo}_biopsiado_tecnica_capilar`).prop('checked')){
							valoresTecnicaIstmo.push(" Capilaridad");
							};
						if($(`#nodulo${numNodulo}_biopsiado_tecnica_aspirar`).prop('checked')){
							valoresTecnicaIstmo.push(" Aspiración");	
							};
						
						const nCristalesAlcoholIstmo = $(`#nodulo${numNodulo}_biopsiado_cfijadoalcohol`).val();
						const nCristalesSecoIstmo = $(`#nodulo${numNodulo}_biopsiado_cfijadoseco`).val();
						const comentarioBiopsiaIstmo = $(`#nodulo${numNodulo}_biopsiado_observaciones`).val();
						textoBiopsiado = `Se ha realizado una biopsia sobre el nódulo:<br>
											Número de pases: ${nPasesIstmo}<br>
											Diámetro de aguja: ${dAgujaIstmo}<br>
											Técnica: ${valoresTecnicaIstmo}<br>
											Número de cristales fijados en alcohol: ${nCristalesAlcoholIstmo}<br>
											Número de cristales fijados en seco: ${nCristalesSecoIstmo}<br>
											Observaciones: ${comentarioBiopsiaIstmo}`;
											
					}else if(parseInt(biopsiadoIstmo, 10)==0){
						textoBiopsiado = `El nódulo no está biopsiado`;
					};
					
					textoIstmo += `Nódulo ${numNodulo} de dimensiones ${apNoduloIstmo} x ${tNoduloIstmo} x ${ccNoduloIstmo}${textoTransversal}<br>
					${textoLocalizacion}<br>
					Ecogenicidad: ${ecogenicidadIstmo}<br>
					Composición: ${composicionIstmo}<br>
					Halo: ${haloIstmo}<br>
					Margen: ${margenIstmo}<br>
					${textoReverberacion}<br> 
					${textoCalcificaciones}<br>
					${textoExtension}<br>
					${textoVascularizacion}<br>
					ACR--> ${acrIstmo}<br>
					EU-TIRADS--> ${eu_tiradsIstmo}<br>
					ATA--> ${ataIstmo}<br>
					Observaciones: ${comentarioNoduloIstmo}<br>
					${textoBiopsiado}<br><br>`; 
				};
			};
		};
		
		
		let textoDcho = ``;
		if(lobectomiaDcho.checked){
			textoDcho = `EL paciente presenta una lobectomia en el Lóbulo Izquierdo<br><br>`;
		}else{
			textoDcho = `Nodulos en el lobulo Derecho: <br><br>`;
			for(let i = 0; i < ListaNodulos.length; i++){
				
				const nodulo = ListaNodulos[i];
				const numNodulo = i+1;
				//Variables del nodulo
				const lobulo = $(`[name = "nodulo${numNodulo}_lobulo"]:checked`).val();
				
				if(lobulo == "Derecho"){
					const apNoduloDcho = $(`#nodulo${numNodulo}_ap`).val();
					const tNoduloDcho = $(`#nodulo${numNodulo}_t`).val();
					const ccNoduloDcho = $(`#nodulo${numNodulo}_cc`).val();
					
					const transversalDcho = $(`[name="nodulo${numNodulo}_ctrans"]:checked`).val();
					let textoTransversal = ``;
					if(parseInt(transversalDcho, 10)==1){
						textoTransversal = `, transversal`;
					}else if(parseInt(transversalDcho, 10)==0){
						textoTransversal = `, NO transversal`;
					};
					
					const localizacionDcho=[];
					let textoLocalizacion = ``;
					if($(`#nodulo${numNodulo}_loc_superior`).prop('checked')){
							localizacionDcho.push(" Superior");
						};
					if($(`#nodulo${numNodulo}_loc_medio`).prop('checked')){
							localizacionDcho.push(" Medio");
						};
					if($(`#nodulo${numNodulo}_loc_inferior`).prop('checked')){
							localizacionDcho.push(" Inferior");
						};
					if($(`#nodulo${numNodulo}_loc_anterior`).prop('checked')){
							localizacionDcho.push(" Anterior");
						};
					if($(`#nodulo${numNodulo}_loc_posterior`).prop('checked')){
							localizacionDcho.push(" Posterior");
						};
					if($(`#nodulo${numNodulo}_loc_medial`).prop('checked')){
							localizacionDcho.push(" Medial");
						};
					if($(`#nodulo${numNodulo}_loc_lateral`).prop('checked')){
							localizacionDcho.push(" Lateral");
						};
					textoLocalizacion = `Localizacion: ${localizacionDcho}`
					
					const ecogenicidadDcho = $(`#nodulo${numNodulo}_ecogene option:selected`).attr("label");
					const composicionDcho = $(`#nodulo${numNodulo}_composicion option:selected`).attr("label"); 
					const haloDcho = $(`#nodulo${numNodulo}_halo option:selected`).attr("label");
					const margenDcho = $(`#nodulo${numNodulo}_margen option:selected`).attr("label");
					
					const reverberacionDcho = $(`[name="nodulo${numNodulo}_reverberacion"]:checked`).val();
					let textoReverberacion = ``;
					if(parseInt(reverberacionDcho,10) == 1){
						textoReverberacion = `El paciente presenta artefactos de reverberación.`;
					}else if(parseInt(reverberacionDcho,10) == 0){
						textoReverberacion = `El paciente NO presenta artefactos de reverberación.`;
					};
					
					const calcificacionesDcho = $(`[name="nodulo${numNodulo}_calcificaciones1"]:checked`).val();
					let textoCalcificaciones = ``;
					if(parseInt(calcificacionesDcho, 10) == 1){
						
						const valoresCalcificacionesDcho = [];
						if($(`#nodulo${numNodulo}_microcalcificaciones`).prop('checked')){
							valoresCalcificacionesDcho.push(" Microcalcificaciones");
						};
						if($(`#nodulo${numNodulo}_macro_intranodulares`).prop('checked')){
							valoresCalcificacionesDcho.push(" Macrocalcificaciones Intranodulares");
						};
						if($(`#nodulo${numNodulo}_macro_perifericas`).prop('checked')){
							valoresCalcificacionesDcho.push(" Macrocalcificaciones Periféricas");
						};
						if($(`#nodulo${numNodulo}_macro_peri_interrumpidas`).prop('checked')){
							valoresCalcificacionesDcho.push(" Macrocalcificaciones Periféricas Interrumpidas");
						};
						textoCalcificaciones = `El paciente presenta las siguientes calcificaciones: ${valoresCalcificacionesDcho}`;
					}else if(parseInt(calcificacionesDcho, 10) == 0){
						textoCalcificaciones = `El paciente NO presenta calcificaciones.`;
					};
					
					const extensionextraDcho = $(`[name="nodulo${numNodulo}_extensionextra1"]:checked`).val();
					let textoExtension = ``;
					if(parseInt(extensionextraDcho, 10) == 1){
						
						const valoresExtensionDcho = [];
						if($(`#nodulo${numNodulo}_extensionextra_anterior`).prop('checked')){
							valoresExtensionDcho.push(" Anterior");
						};
						if($(`#nodulo${numNodulo}_extensionextra_posterior`).prop('checked')){
							valoresExtensionDcho.push(" Posterior");
						};
						if($(`#nodulo${numNodulo}_extensionextra_medial`).prop('checked')){
							valoresExtensionDcho.push(" Medial");
						};
						if($(`#nodulo${numNodulo}_extensionextra_lateral`).prop('checked')){
							valoresExtensionDcho.push(" Lateral");
						};
						textoExtension = `El nódulo presenta las siguientes extensiones extratiroideas: ${valoresExtensionDcho}`;
						
					}else if(parseInt(extensionextraDcho, 10) == 0){
						textoExtension = `El nódulo NO presenta extensión extratiroidea`;
					};
					
					const vascularizacionDcho = $(`#nodulo${numNodulo}_vascularizacion option:selected`).attr("label");
					let textoVascularizacion = ``;
					if(vascularizacionDcho == "Periférica" || vascularizacionDcho == "Central" || vascularizacionDcho == "Mixta"){
						const vascularizacionTipoDcho = $(`#nodulo${numNodulo}_tipo_periferica option:selected`).attr("label");
						textoVascularizacion = `Vascularización: ${vascularizacionDcho} --> ${vascularizacionTipoDcho}`;
					}else{
						textoVascularizacion = `Vascularización: ${vascularizacionDcho}`;
					};
					
					const acrDcho =$(`#acrValor${numNodulo}`).text();
					const eu_tiradsDcho = $(`#euValor${numNodulo}`).text();
					const ataDcho = $(`#ataValor${numNodulo}`).text();
					
					const comentarioNoduloDcho = $(`#nodulo${numNodulo}_observaciones`).val();
					
					const biopsiadoDcho = $(`[name="nodulo${numNodulo}_biopsiado"]:checked`).val();
					let textoBiopsiado = ``;
					if(parseInt(biopsiadoDcho, 10)==1){
						const nPasesDcho = $(`#nodulo${numNodulo}_biopsiado_pases`).val();
						const dAgujaDcho = $(`#nodulo${numNodulo}_biopsiado_daguja`).val();
						
						const valoresTecnicaDcho = [];
						if($(`#nodulo${numNodulo}_biopsiado_tecnica_capilar`).prop('checked')){
							valoresTecnicaDcho.push(" Capilaridad");
							};
						if($(`#nodulo${numNodulo}_biopsiado_tecnica_aspirar`).prop('checked')){
							valoresTecnicaDcho.push(" Aspiración");	
							};
						
						const nCristalesAlcoholDcho = $(`#nodulo${numNodulo}_biopsiado_cfijadoalcohol`).val();
						const nCristalesSecoDcho = $(`#nodulo${numNodulo}_biopsiado_cfijadoseco`).val();
						const comentarioBiopsiaDcho = $(`#nodulo${numNodulo}_biopsiado_observaciones`).val();
						textoBiopsiado = `Se ha realizado una biopsia sobre el nódulo:<br>
											Número de pases: ${nPasesDcho}<br>
											Diámetro de aguja: ${dAgujaDcho}<br>
											Técnica: ${valoresTecnicaDcho}<br>
											Número de cristales fijados en alcohol: ${nCristalesAlcoholDcho}<br>
											Número de cristales fijados en seco: ${nCristalesSecoDcho}<br>
											Observaciones: ${comentarioBiopsiaDcho}`;
											
					}else if(parseInt(biopsiadoDcho, 10)==0){
						textoBiopsiado = `El nódulo no está biopsiado`;
					};
					
					textoDcho += `Nódulo ${numNodulo} de dimensiones ${apNoduloDcho} x ${tNoduloDcho} x ${ccNoduloDcho}${textoTransversal}<br>
					${textoLocalizacion}<br>
					Ecogenicidad: ${ecogenicidadDcho}<br>
					Composición: ${composicionDcho}<br>
					Halo: ${haloDcho}<br>
					Margen: ${margenDcho}<br>
					${textoReverberacion}<br> 
					${textoCalcificaciones}<br>
					${textoExtension}<br>
					${textoVascularizacion}<br>
					ACR--> ${acrDcho}<br>
					EU-TIRADS--> ${eu_tiradsDcho}<br>
					ATA--> ${ataDcho}<br>
					Observaciones: ${comentarioNoduloDcho}<br>
					${textoBiopsiado}<br><br>`; 
				};
			};
		};
		
		
		let textoAdeno = ``;
		if(parseInt(adenopatias, 10)==0){
			textoAdeno = `No se observan adenopatías laterocervicales sospechosas por tamaño ni por características ecográficas <br><br>`;
		}else if(parseInt(adenopatias, 10)==1){
			
			let tablaAdeno = document.getElementById("adenopatias_tabla")
			let textoAdeno2 = ``;
			for(let i=1;i<tablaAdeno.rows.length;i++){
				
				let numAdeno = i;
				let apAdeno = document.getElementById(`adeno${i}_ap`).value;
				let tAdeno = document.getElementById(`adeno${i}_t`).value;
				let ccAdeno = document.getElementById(`adeno${i}_cc`).value;
				let cervicalAdeno = document.getElementById(`adeno${i}_ncerv`).value;
				let observacionesAdeno = document.getElementById(`adeno${i}_observaciones`).value;
				
				textoAdeno2 += `Adenopatía ${numAdeno} de dimensiones ${apAdeno} x ${tAdeno} x ${ccAdeno}, en nivel ${cervicalAdeno} cervical. Observaciones: ${observacionesAdeno}<br>`;
				
			};
			textoAdeno = `Se observan adenopatías sospechosas<br>
						  ${textoAdeno2}`;
		};
		
		        
		let texto = `<br><p align="center" style="color:red;">Nombre: ${nombre}</p><br>
						 <p align="center" style="color:red;">NHC: ${nhc}</p><br>
						 <p align="center" style="color:red;">Sexo: ${sexo}</p><br>
						 <p align="center" style="color:red;">Edad: ${edad}</p><br>
					
		<h3>INFORME ESTRUCTURADO:</h3><br>
		 Nota: Las dimensiones se dan en formato APxTxCC y en unidades de centímetros(cm)<br><br> 
		
		 Lóbulo tiroideo izquierdo de dimensiones ${apIzdo} x ${tIzdo} x ${ccIzdo}, ecogenicidad global ${ecoIzdo} y vascularización ${vascuIzdo}<br>
		 Comentarios: ${comentarioLobuloIzdo}<br>
		 ${textoIzdo}
		 
		 Istmo de dimensiones ${apIstmo}<br>
		 Comentarios: ${comentarioIstmo} <br>
		 ${textoIstmo}
		 
		 Lóbulo tiroideo derecho de dimensiones ${apDcho} x ${tDcho} x ${ccDcho}, ecogenicidad global ${ecoDcho} y vascularización ${vascuDcho}<br>
		 Comentarios: ${comentarioLobuloDcho}<br>
		 ${textoDcho}
		 
		 ${textoAdeno}`;
		 
        //Sacamos los datos
        /*let texto = `<br>El paciente ${nombre}, ${sexo} con numero de historia ${nhc}, de ${edad} anos de edad se realiza la prueba. <br>
        <br> Ecografia tiroidea realizada en consulta de Endocrinologia:<br>
Lobulo tiroideo izquierdo (mm)<br>
AP:${ap}; T:${t} ; CC:${cc} <br>
Ecogenicidad global: ${lobulo_izq_eco}<br>
Numero de nodulos: ${nodulos}<br><br>
${texto1}<br>`*/

        $('#info_nombre').html(texto);
    });
});

var num = 1;
function desplegar_tabla_adeno(){
	let tabla_adenopatias = document.getElementById("adenopatias_tabla");
	tabla_adenopatias.innerHTML =           `<button id="agregarAdeno${num}" onClick="agregar_fila();">AÑADIR ADENOPATIA</button>
            <tr>
                <td></td>
                <td>AP:</td>
                <td>T:</td>
                <td>CC:</td>
                <td>Nivel cervical</td>
                <td>Observaciones</td>
            </tr>

            <tr>
                <td>#1</td>
                <td><input type="text" name="adeno1_ap" id="adeno1_ap"></td>
                <td><input type="text" name="adeno1_t" id="adeno1_t"></td>
                <td><input type="text" name="adeno1_cc" id="adeno1_cc"></td>
                <td><input type="text" name="adeno1_ncerv" id="adeno1_ncerv"></td>
                <td><textarea name="adeno1_observaciones" id="adeno1_observaciones"> </textarea></td>
            </tr>
			<button id=eliminarAdeno${num} value="${num}" onClick="eliminar_fila();">ELIMINAR ÚLTIMA FILA</button>`;
};


function recoger_tabla_adeno(){
	num = 1;
	let tabla_adenopatias = document.getElementById("adenopatias_tabla");
	tabla_adenopatias.innerHTML = "";
};


function agregar_fila(){
	let tabla_adenopatias = document.getElementById("adenopatias_tabla");
	num++; 
	tabla_adenopatias.insertRow(-1).innerHTML = `<td>#${num} </td><td><input type="text" name="adeno${num}_ap" id="adeno${num}_ap"></td><td><input type="text" name="adeno${num}_t" id="adeno${num}_t"></td><td><input type="text" name="adeno${num}_cc" id="adeno${num}_cc"></td><td><input type="text" name="adeno${num}_ncerv" id="adeno${num}_ncerv"></td><td><textarea name="adeno${num}_observaciones" id="adeno${num}_observaciones"> </textarea></td>`;
};

function eliminar_fila(){
	let tabla_adenopatias = document.getElementById("adenopatias_tabla");
	
	tabla_adenopatias.deleteRow(-1);
	num--;
};




function agregar_nodulo(boton){
	var num2 = parseInt(boton.value,10) +1;
	var num3 = num2+1;
	var num4 = parseInt(boton.value,10);
	
	
	if(document.getElementById(`editar${num4}`)){
		document.getElementById(`editar${num4}`).remove();
	};
	
	
	let nodulo = document.getElementById(`card_nodulo${num4}`);
	let codigo = `<div id="card_nodulo${num2}" class="nodulo">
        
            <div class="nodulo-cabecera">NÓDULO ${num2}</div>
            
            <div class="seccion" id="lobulo${num2}"> Lóbulo:
                <label for="nodulo${num2}_lobulo_drc"><input class="${num2}" value="Derecho" type="radio" name="nodulo${num2}_lobulo" id="nodulo${num2}_lobulo_drc">Derecho</label>
                <label for="nodulo${num2}_lobulo_izq"><input class="${num2}" value="Izquierdo" type="radio" name="nodulo${num2}_lobulo" id="nodulo${num2}_lobulo_izq">Izquierdo</label>
                <label for="nodulo${num2}_lobulo_itsmo"><input class="${num2}" value="Istmo" type="radio" name="nodulo${num2}_lobulo" id="nodulo${num2}_lobulo_itsmo">Istmo</label>
            </div>
            
            <div class="seccion">
                Dimensiones (mm)
                <label for="nodulo${num2}_ap">AP:<input class="${num2}" type="text" name="nodulo${num2}_ap" id="nodulo${num2}_ap"></label>
                <label for="nodulo${num2}_t">T:<input class="${num2}" type="text" name="nodulo${num2}_t" id="nodulo${num2}_t"></label>
                <label for="nodulo${num2}_cc">CC:<input class="${num2}" type="text" name="nodulo${num2}_cc" id="nodulo${num2}_cc"></label>
            </div>
            
            <div class="seccion">
                Transversal:
                <label for="nodulo${num2}_ctrans_si">SI <input class="${num2}" value=1 type="radio" name="nodulo${num2}_ctrans" id="nodulo${num2}_ctrans_si"></label>
                <label for="nodulo${num2}_ctrans_no">NO <input class="${num2}" value=0 type="radio" name="nodulo${num2}_ctrans" id="nodulo${num2}_ctrans_no"></label>
           </div>
           
            <div class="seccion">
                Localización:
                <label for="nodulo${num2}_loc_superior">Superior <input class="${num2}" value="Superior" type="checkbox" name="nodulo${num2}_loc" id="nodulo${num2}_loc_superior" title="SUPERIOR"></label>
                <label for="nodulo${num2}_loc_medio">Medio<input class="${num2}" value="Medio" type="checkbox" name="nodulo${num2}_loc" id="nodulo${num2}_loc_medio"></label>
                <label for="nodulo${num2}_loc_inferior">Inferior<input class="${num2}" value="Inferior" type="checkbox" name="nodulo${num2}_loc" id="nodulo${num2}_loc_inferior"></label>
				<label for="nodulo${num2}_loc_anterior">Anterior<input class="${num2}" value="Anterior" type="checkbox" name="nodulo${num2}_loc" id="nodulo${num2}_loc_anterior"></label>
                <label for="nodulo${num2}_loc_posterior">Posterior<input class="${num2}" value="Posterior" type="checkbox" name="nodulo${num2}_loc" id="nodulo${num2}_loc_posterior"></label>
                <label for="nodulo${num2}_loc_medial">Medial<input class="${num2}" value="Medial" type="checkbox" name="nodulo${num2}_loc" id="nodulo${num2}_loc_medial"></labeL>
                <label for="nodulo${num2}_loc_lateral">Lateral<input class="${num2}" value="Lateral" type="checkbox" name="nodulo${num2}_loc" id="nodulo${num2}_loc_lateral"></Label>
			</div>
			
            <div class="seccion">
                Ecogenicidad:
                <select class="${num2}" name="nodulo${num2}_ecogene" id="nodulo${num2}_ecogene">
                    <option value=""></option>
                    <option value="3" label="Marcadamente hipoecoico">Marcadamente hipoecoico</option>
                    <option value="2" label="Hipoecoico">Hipoecoico</option>
                    <option value="1" label="Isoecoico">Isoecoico</option>
                    <option value="1" label="Hiperecoico">Hiperecoico</option>
                    <option value="1" label="Heteroecoico">Heteroecoico</option>
                </select>
            </div>
            
            <div class="seccion">
                Composición:
                <select class="${num2}" name="nodulo${num2}_composicion" id="nodulo${num2}_composicion">
                    <option value=""></option>
                    <option value="2" label="Sólido">Sólido </option>
                    <option value="2" label="Predom. sólido (>80%)">Predom. sólido (>80%)</option>
                    <option value="1" label="Mixto, CON área sólida excéntrica">Mixto, CON área sólida excéntrica</option>
                    <option value="1" label="Mixto, SIN área sólida excéntrica">Mixto, SIN área sólida excéntrica</option>
                    <option value="3" label="Espongiforme">Espongiforme</option>
                    <option value="0" label="Quiste simple">Quiste simple</option>
                </select>
            </div>
            
            <div class="seccion">
                Halo:
                <select class="${num2}" name="nodulo${num2}_halo" id="nodulo${num2}_halo">
                    <option value=""></option>
                    <option value="0" label="NO">NO </option>
                    <option value="1" label="SI">SÍ</option>
                    <option value="2" label="Interrumpido">Interrumpido</option>
                </select>
            </div>
            
            <div class="seccion">
                Márgen:
                <select class="${num2}" name="nodulo${num2}_margen" id="nodulo${num2}_margen">
                    <option value=""></option>
                    <option value="0" label="Bien delimitado">Bien delimitado </option>
                    <option value="0" label="Mal delimitado">Mal delimitado</option>
                    <option value="1" label="Irregular">Irregular</option>
                    <option value="1" label="Microlobular">Microlobular</option>
                    <option value="3" label="Extension extratiroidea">Extension extratiroidea</option>
					<option value="1" label="Infiltrante">Infiltrante</option>
                </select>
            </div>
            
            <div class="seccion">
                Artefactos de reverberación:
				<label for="nodulo${num2}_reverberacion_si">SI <input class="${num2}" value=1 type="radio" name="nodulo${num2}_reverberacion" id="nodulo${num2}_reverberacion_si"></label>
                <label for="nodulo${num2}_reverberacion_no">NO <input class="${num2}" value=0 type="radio" name="nodulo${num2}_reverberacion" id="nodulo${num2}_reverberacion_no"></label>
            </div>
            
			<div class="seccion" id="calcificaciones${num2}">
                Calcificaciones:
                <label for="nodulo${num2}_calcificaciones_si">SI <input value=1 class="${num2}" type="radio" name="nodulo${num2}_calcificaciones1" id="nodulo${num2}_calcificaciones_si" onClick="desplegar_calcificaciones(this);"></label>
                <label for="nodulo${num2}_calcificaciones_no">NO <input value=0 class="${num2}" type="radio" name="nodulo${num2}_calcificaciones1" id="nodulo${num2}_calcificaciones_no" onClick="recoger_calcificaciones(this);"></label>
            </div>
            
            <div class="seccion" id="extensionextra${num2}">
                Extensión extratiroidea:
                <label for="nodulo${num2}_extensionextra_si">SI <input value=1 class="${num2}" type="radio" name="nodulo${num2}_extensionextra1" id="nodulo${num2}_extensionextra_si" onClick="desplegar_extension(this);"></label>
                <label for="nodulo${num2}_extensionextra_no">NO <input value=0 class="${num2}" type="radio" name="nodulo${num2}_extensionextra1" id="nodulo${num2}_extensionextra_no" onClick="recoger_extension(this);"></label>
            </div>
            
            <div class="seccion" id ="vascularizacion${num2}">
                Vascularización:
                <select class="${num2}" name="${num2}" id="nodulo${num2}_vascularizacion" onClick="desplegar_vascu_periferica(this);">
                    <option value=""></option>
                    <option value="0" label="No vascularizado">No vascularizado</option>
                    <option value="1" label="Periférica">Periférica</option>
                    <option value="2" label="Central">Central</option>
                    <option value="3" label="Mixta">Mixta</option>
                </select>
            </div>
            
          	<button class="${num2}" value="${num2}" id="generar_acr" value=${num} onClick="generar_acr(this);generar_eu(this);generar_ata(this);">GENERAR CATEGORIAS: ACR, EU-TIRADS y ATA</button>

	        <div id="acr${num2}" class="acr">
	        </div>

			<div id="eu${num2}" class="eu">
	        </div>

	        <div id="ata${num2}" class="ata">
	        </div>
            
            <div class="seccion">
                <label for="nodulo${num2}_observaciones">
                    Observaciones:
                    <textarea class="${num2}" name="nodulo${num2}_observaciones" id="nodulo${num2}_observaciones" cols="30" rows="10"></textarea>
                </label>
            </div>
            
            <div class="seccion" id="biopsia${num2}">
                Nódulo biopsiado:
                <label for="nodulo${num2}_biopsiado_si">SI <input class="${num2}" type="radio" name="nodulo${num2}_biopsiado" value=1 id="nodulo${num2}_biopsiado_si" onClick="desplegar_biopsiado(this);"></label>
                <label for="nodulo${num2}_biopsiado_no">NO <input class="${num2}" type="radio" name="nodulo${num2}_biopsiado" value=0 id="nodulo${num2}_biopsiado_no" onClick="recoger_biopsiado(this);"></label>
            </div>
            
            
        <button class="${num2}" id="generar_nodulo${num3}" value="${num2}" onClick="agregar_nodulo(this);generar_boton_editar(this);bloquearCampos(this);">GUARDAR Y AÑADIR NÓDULO</button>
		<button  id="guardar${num2}" value=${num2} onClick="guardar(this);">GUARDAR</button>
        </div>`;

	nodulo.insertAdjacentHTML('afterend', codigo);
	boton.remove();
};

function aviso(){
	alert("No es necesario que rellene los últimos campos si marca NO en esta opción");
};


function generar_acr(boton){
	var num2 = parseInt(boton.value, 10);
	
	if(document.getElementById(`acrValor${num2}`)){
		document.getElementById(`acrValor${num2}`).remove();
	};
	
        console.log("GENERO EL ACR");
	//PARA ACR-TIRADS ACR TIRADS Puntos
	let ecogenicidad=$(`#nodulo${num2}_ecogene`).val();
	let composicion=$(`#nodulo${num2}_composicion`).val();
	let margen= $(`#nodulo${num2}_margen`).val();
                                   
	const ap=parseInt($(`#nodulo${num2}_ap`).val(), 10);
	const t=parseInt($(`#nodulo${num2}_t`).val(), 10);
	
	let puntuacionACR=0;
	
	console.log(puntuacionACR);
	

	//Si composicion espongiforme vale directamente 0 si no es la suma de los campos
	if(composicion=='3'){
	      puntuacionACR=0;
	}else {	
			if (ap > t){
				puntuacionACR=3;
			};
			puntuacionACR= parseInt(composicion, 10) + parseInt(ecogenicidad, 10) + parseInt(margen, 10);
	    	//puntuacionACR= ecogenicidad + composicion + margen+ mas_ancho_que + micro_calc + macro_intra + macro_perf + macro_inter;
			
	    	
	    	if($(`#nodulo${num2}_microcalcificaciones`).prop('checked')){
	    		puntuacionACR= puntuacionACR+3;
	    	};
			if($(`#nodulo${num2}_macro_intranodulares`).prop('checked')){
	    		puntuacionACR= puntuacionACR+ 1;
	    	};
	    	if($(`#nodulo${num2}_macro_perifericas`).prop('checked')){
	    		puntuacionACR= puntuacionACR+ 2;
	    	};
	    	if($(`#nodulo${num2}_macro_peri_interrumpidas`).prop('checked')){
	    		puntuacionACR= puntuacionACR+ 2;
	    	};
	    
	    	//console.log(puntuacionACR);
	    	if($(`#nodulo${num2}_hiper_micro`).prop('checked') ){
	    	     puntuacionACR= puntuacionACR+ 3 ;
	    	};
	};

	console.log(puntuacionACR);
    
	
	//CATERGORIAS acr tirads
	let categoriaACR='';	
	if(puntuacionACR == 2){
		categoriaACR='TR2';
	}else if(puntuacionACR == 3){
		categoriaACR='TR3';
	}else if(puntuacionACR == 4 || puntuacionACR==5){
		categoriaACR='TR4';
	}else if(puntuacionACR > 5){
		categoriaACR='TR5';
	}else{
		categoriaACR='TR1';
	};
	

	let acr= document.getElementById(`acr${num2}`);
	acr.insertAdjacentHTML('afterend', `<h4>CATEGORIA ACR</h4><div id="acrValor${num2}">${categoriaACR}</div>`);
};

function generar_eu(boton){
	var num2 = parseInt(boton.value, 10);
	
	if(document.getElementById(`euValor${num2}`)){
		document.getElementById(`euValor${num2}`).remove();
	};
	
	
	const composicion = parseInt($(`#nodulo${num2}_composicion`).val(), 10);
	const ap = parseInt($(`#nodulo${num2}_ap`).val(), 10);
	const t = parseInt($(`#nodulo${num2}_t`).val(), 10);
	const ecogenicidad = $(`#nodulo${num2}_ecogene option:selected`).attr("label");
	const margen =$(`#nodulo${num2}_margen option:selected`).attr("label");
	//Valor True o False
	const microcalcificaciones = $(`#nodulo${num2}_microcalcificaciones`).prop('checked');
	var eu_tirads = ``;
	const ovoide = ap>t;
	
	if(composicion == 0 || composicion == 3){
		eu_tirads = `EU-TIRADS 2: benigno`;
	};
	if(ovoide &&(ecogenicidad=="Isoecoico" || ecogenicidad=="Hiperecoico")&& margen=="Mal delimitado"){
		eu_tirads = `EU-TIRADS 3: riesgo bajo`;
	};
	if(ovoide && ecogenicidad=="Hipoecoico" && margen=="Mal delimitado"){
		eu_tirads = `EU-TIRADS 4: riesgo medio`;
	};
	if(margen == "Irregular" || microcalcificaciones || (ecogenicidad == "Marcadamente hipoecoico" && composicion ==2)){
		eu_tirads = `EU-TIRADS 5: riesgo alto`;
	};
	if(eu_tirads ==``){
		eu_tirads = `EU-TIRADS 1: normal`;
	};
	
	let eu = document.getElementById(`eu${num2}`);
	eu.insertAdjacentHTML('afterend', `<h4>CATEGORIA EU-TIRADS</h4><div id="euValor${num2}">${eu_tirads}</div>`);
};

function generar_ata(boton){
	num2 = parseInt(boton.value, 10);
	
	if(document.getElementById(`ataValor${num2}`)){
		document.getElementById(`ataValor${num2}`).remove();
	};
		
	const composicion = $(`#nodulo${num2}_composicion option:selected`).attr("label");
	const ap = parseInt($(`#nodulo${num2}_ap`).val(), 10);
	const t = parseInt($(`#nodulo${num2}_t`).val(), 10);
	const ecogenicidad = $(`#nodulo${num2}_ecogene option:selected`).attr("label");
	const margen =$(`#nodulo${num2}_margen option:selected`).attr("label");
	//Valor True o False
	const microcalcificaciones = $(`#nodulo${num2}_microcalcificaciones`).prop('checked');
	var ata = ``;
	const ovoide = ap>t;
	
	if((composicion=="Sólido" && ecogenicidad=="Hipoecoico" && margen != "Mal delimitado")||((composicion=="Predom. sólido (>80%)" || composicion == "Mixto, CON área sólida excéntrica")&&ecogenicidad=="Hipoecoico"&&((margen == "Irregular" || margen == "Microlobular"|| margen == "Infiltrante")||microcalcificaciones||ovoide))){
		ata=`Sospecha alta: 70% - 90%`;
	}else if(composicion=="Sólido" && ecogenicidad=="Hipoecoico" && margen=="Mal delimitado"){
		ata=`Sospecha media: 10% - 20%`;
	}else if((composicion=="Sólido" && (ecogenicidad =="Isoecoico" || ecogenicidad == "Hiperecoico"))||composicion == "Mixto, CON área sólida excéntrica"){
		ata=`Sospecha baja: 5% - 10%`;
	}else if(composicion == "Espongiforme"){
		ata=`Sospecha muy baja: <3%`;
	};
	if(ata==``){
		ata=`Benigno: <1%`;
	};
	
	let ata2 = document.getElementById(`ata${num2}`);
	ata2.insertAdjacentHTML('afterend', `<h4>CATEGORIA ATA</h4><div id="ataValor${num2}">${ata}</div>`);
};

function bloquearCampos(boton){
	var num4 = parseInt(boton.value, 10);
	/*let campo1 = document.getElementById("nodulo1_lobulo_drc");
	let campo2 = document.getElementById("nodulo1_lobulo_itsmo");
	let campo3 = document.getElementById("nodulo1_lobulo_izq");
	
	campo1.setAttribute("disabled","");
	
	
	campo2.setAttribute("disabled","");
	
	
	campo3.setAttribute("disabled","");*/
	
	let seccion = document.getElementsByClassName(`${num4}`);
	for(let i = 0; i<seccion.length; i++){
		seccion[i].setAttribute("disabled","");
	};
};

function generar_boton_editar(boton){
	var num4 = parseInt(boton.value, 10);
	let nodulo = document.getElementById(`card_nodulo${num4}`);
	
	nodulo.insertAdjacentHTML('beforeend', `<button  id="editar${num4}" value=${num4} onClick="editar(this);">EDITAR</button>`);
};

function editar(boton){
	var valor = parseInt(boton.value, 10);
	
	let seccion = document.getElementsByClassName(`${valor}`);
	for(let i = 0; i<seccion.length; i++){
		seccion[i].removeAttribute("disabled");
		
	};
};

function guardar(boton){
	var valor = parseInt(boton.value, 10);
	
	if(document.getElementById(`editar${valor}`)){
		null;
	}else{
		let nodulo = document.getElementById(`card_nodulo${valor}`);
		nodulo.insertAdjacentHTML('beforeend', `<button  id="editar${valor}" value=${valor} onClick="editar(this);">EDITAR</button>`);
	};
	
	let seccion = document.getElementsByClassName(`${valor}`);
	for(let i = 0; i<seccion.length; i++){
		seccion[i].setAttribute("disabled", "");
	};
};

function desplegar_biopsiado(boton){
	var valor = parseInt($(boton).attr("class"), 10);
	let biopsia = document.getElementById(`biopsia${valor}`);
	
	var codigo=`    <div class="seccion" id="campos_biopsia${valor}">
            	<p><label for="nodulo${valor}_biopsiado_pases">Número de pases: <input class="${valor}" type="number" name="nodulo${valor}_biopsiado_pases" id="nodulo${valor}_biopsiado_pases"></label></p>
                <p><label for="nodulo${valor}_biopsiado_daguja">Diámetro de aguja: <input class="${valor}" type="number" name="nodulo${valor}_biopsiado_daguja" id="nodulo${valor}_biopsiado_daguja"></label></p>
                <p><label for="nodulo${valor}_biopsiado_tecnica">Técnica:
                    <label for="nodulo${valor}_biopsiado_tecnica_si">Capilaridad <input class="${valor}" type="checkbox" name="nodulo${valor}_biopsiado_capilar" id="nodulo${valor}_biopsiado_tecnica_capilar"></label>
                    <label for="nodulo${valor}_biopsiado_tecnica_no">Aspiración <input class="${valor}" type="checkbox" name="nodulo${valor}_biopsiado_aspirar" id="nodulo${valor}_biopsiado_tecnica_aspirar"></label>
                </label></p>
                <p><label for="nodulo${valor}_biopsiado_cfijadoalcohol">Número de cristales fijados en alcohol: <input class="${valor}" type="number" name="nodulo${valor}_biopsiado_cfijadoalcohol" id="nodulo${valor}_biopsiado_cfijadoalcohol"></label></p>
                <p><label for="nodulo${valor}_biopsiado_cfijadoseco">Número de cristales fijados en seco:  <input class="${valor}" type="number" name="nodulo${valor}_biopsiado_cfijadoseco" id="nodulo${valor}_biopsiado_cfijadoseco"></label></p>
                <p><label for="nodulo${valor}_biopsiado_observaciones">Observaciones:  <textarea class="${valor}" name="nodulo${valor}_biopsiado_observaciones" id="nodulo${valor}_biopsiado_observaciones" cols="30" rows="10"></textarea></label></p>
            </div>`;
	biopsia.insertAdjacentHTML('afterend', codigo);
};

function recoger_biopsiado(boton){
	var valor = parseInt($(boton).attr("class"), 10);
	let biopsiado = document.getElementById(`campos_biopsia${valor}`);
	biopsiado.remove();
};

function desplegar_calcificaciones(boton){
	var valor = parseInt($(boton).attr("class"), 10);
	let calcificaciones = document.getElementById(`calcificaciones${valor}`);
	let codigo= `<div class="seccion" id="nodulo${valor}_calcificaciones">Tipo de calcificación:
	
					<label for="nodulo${valor}_microcalcificaciones">Microcalcificaciones<input class="${valor}" value=3 type="checkbox" name="nodulo${valor}_calcificaciones" id="nodulo${valor}_microcalcificaciones"></label>
	                <label for="nodulo${valor}_macro_intranodulares">Macrocalcificaciones Intranodulares<input class="${valor}" value=1 type="checkbox" name="nodulo${valor}_calcificaciones" id="nodulo${valor}_macro_intranodulares"></label>
	                <label for="nodulo${valor}_macro_perifericas">Macrocalcificaciones Periféricas<input class="${valor}" value=2 type="checkbox" name="nodulo${valor}_calcificaciones" id="nodulo${valor}_macro_perifericas"></label>
	                <label for="nodulo${valor}_macro_peri_interrumpidas">Macrocalcificaciones Periféricas Interrumpidas<input class="${valor}" value=2 type="checkbox" name="nodulo${valor}_calcificaciones" id="nodulo${valor}_macro_peri_interrumpidas"></label>
				
                </select></div>`;

	calcificaciones.insertAdjacentHTML('afterend', codigo);
};

function recoger_calcificaciones(boton){
	var valor = parseInt($(boton).attr("class"), 10)
	let calcificaciones = document.getElementById(`nodulo${valor}_calcificaciones`);
	
	calcificaciones.remove();
};

function desplegar_vascu_periferica(boton){
	var valorVascularizacion = parseInt(boton.value, 10);
	var valor = parseInt(boton.name, 10);
	
	if(document.getElementById(`vascu_periferica${valor}`)){
		document.getElementById(`vascu_periferica${valor}`).remove();
	};
	
	if(valorVascularizacion == 1 || valorVascularizacion == 2 || valorVascularizacion == 3){
		codigo = `<div class="seccion" id="vascu_periferica${valor}">
                Tipo de Vascularización:
                <select class="${valor}" name="nodulo${valor}_tipo_periferica" id="nodulo${valor}_tipo_periferica">
                    <option value="4" label="Escasa">Escasa</option>
                    <option value="5" label="Moderada">Moderada</option>
                    <option value="6" label="Elevada">Elevada</option>
                </select>
            </div>`;
		let vascularizacion = document.getElementById(`vascularizacion${valor}`);
		
		vascularizacion.insertAdjacentHTML('afterend', codigo);
	}else{
		let vascuPeriferica = document.getElementById(`vascu_periferica${valor}`);
		vascuPeriferica.remove();
	};
};

function desplegar_extension(boton){
	var valor = parseInt($(boton).attr("class"), 10);
	let extensionextra = document.getElementById(`extensionextra${valor}`);
	
	let codigo = `<div class="seccion" id="nodulo${valor}_extensionextra">
            		Localización de la extensión extratiroidea:
	                <label for="nodulo${valor}_extensionextra_anterior">Anterior<input class="${valor}" value=1 type="checkbox" name="nodulo${valor}_extensionextra" id="nodulo${valor}_extensionextra_anterior"></label>
	                <label for="nodulo${valor}_extensionextra_posterior">Posterior<input class="${valor}" value=2 type="checkbox" name="nodulo${valor}_extensionextra" id="nodulo${valor}_extensionextra_posterior"></label>
	                <label for="nodulo${valor}_extensionextra_medial">Medial<input class="${valor}" value=3 type="checkbox" name="nodulo${valor}_extensionextra" id="nodulo${valor}_extensionextra_medial"></label>
					<label for="nodulo${valor}_extensionextra_lateral">Lateral<input class="${valor}" value=4 type="checkbox" name="nodulo${valor}_extensionextra" id="nodulo${valor}_extensionextra_lateral"></label>
                  </div>`;
	extensionextra.insertAdjacentHTML('afterend', codigo);
};

function recoger_extension(boton){
	var valor = parseInt($(boton).attr("class"), 10)
	let extensionextratipos = document.getElementById(`nodulo${valor}_extensionextra`);
	
	extensionextratipos.remove();
};
	