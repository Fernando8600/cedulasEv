import { preguntasPorSeccion } from "@/pages/preguntasPorSeccion";


const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

        let totalPonderacion = 0; //  ponderación total

        // Recorrer las respuestas
        Object.entries(respuestas).forEach(([preguntaId, respuesta]) => {
  
            const pregunta = preguntasPorSeccion.flatMap(seccion => seccion.preguntas).find(pregunta => pregunta.id === preguntaId);

            if (pregunta && respuesta !== undefined && respuesta !== null) {

                switch (pregunta.tipo) {
                    case 'texto ':
                    case 'checkbox': //3 valores
                        totalPonderacion += parseInt(respuesta.toString()) * (pregunta.ponderacion / 2);
                        break;
                    case 'checkboxdual':
                        totalPonderacion += parseInt(respuesta.toString()) * (pregunta.ponderacion);
                        break;
                    case 'checkboxquint':
                        totalPonderacion += parseInt(respuesta.toString()) * (pregunta.ponderacion / 5);
                        break;
                    case 'checkboxquad':
                        totalPonderacion += parseInt(respuesta.toString()) * (pregunta.ponderacion / 4);
                        break;
                    case 'checkboxdualW':
                        totalPonderacion += parseInt(respuesta.toString()) * (pregunta.ponderacion);
                        break;
                    case 'checkboxdualIVU':
                        totalPonderacion += parseInt(respuesta.toString()) * (pregunta.ponderacion); 
                        break;
                    case 'opcional':
                        if (respuestas['pregunta_20'] == 1 || respuestas['pregunta_20'] == 2) {
                            totalPonderacion += parseInt(respuesta.toString()) * (pregunta.ponderacion);
                        } else if (respuestas['pregunta_20'] == 0) {
                            totalPonderacion += 0;
                        }

                        break;
                    case 'opcional2':
                        if (respuestas['pregunta_118'] == 1) {
                            totalPonderacion += parseInt(respuesta.toString()) * (pregunta.ponderacion);
                        } else if (respuestas['pregunta_118'] == 0)
                            totalPonderacion += (pregunta.ponderacion);
                        break;
                    case 'exp1d': // opcional
                        if (respuestas['expediente_01'] == 1) {
                            totalPonderacion += parseInt(respuesta.toString()) * (pregunta.ponderacion);
                        }
                        break;
                    case 'exp1h':
                        if (respuestas['expediente_01'] == 2) {
                            totalPonderacion += parseInt(respuesta.toString()) * (pregunta.ponderacion);
                        }
                        break;
                    case 'exp2Ir':
                        if (respuestas['expediente_02'] == 1) {
                            totalPonderacion += parseInt(respuesta.toString()) * (pregunta.ponderacion);
                        }
                        break;
                    case 'exp2Iv':
                        if (respuestas['expediente_02'] == 2) {
                            totalPonderacion += parseInt(respuesta.toString()) * (pregunta.ponderacion);
                        }
                        break;
                    case 'exp2IvEsp':// SINTOMAS
                        if (respuestas['expediente_02'] == 2) {
                            if (respuestas['pregunta_122'] == 1) {
                                totalPonderacion += parseInt(respuesta.toString()) * (pregunta.ponderacion);
                            } else if (respuestas['pregunta_122'] == 0) {
                                if (parseInt(respuesta.toString()) == 1) {
                                    totalPonderacion += 0;
                                } else if (parseInt(respuesta.toString()) == 0) {
                                    totalPonderacion += 0.5;
                                }

                            }
                        }
                        break;
                    case 'opcional3':
                        if (respuestas['pregunta_124'] == 1 && respuestas['pregunta_122'] == 1) {
                            totalPonderacion += parseInt(respuesta.toString()) * (pregunta.ponderacion);
                        } else if (respuestas['pregunta_124'] == 0 && respuestas['pregunta_122'] == 1) {
                            totalPonderacion += 0;
                        } else if (respuestas['pregunta_124'] == 1 && respuestas['pregunta_122'] == 0) {
                            totalPonderacion += 0;
                        } else if (respuestas['pregunta_124'] == 0 && respuestas['pregunta_122'] == 0) {
                            totalPonderacion += 1;
                        }
                        break;
                    case 'opcional4':
                        if (respuestas['pregunta_128'] == 1) {
                            totalPonderacion += 1;
                        } else if (respuestas['pregunta_128'] == 0 && respuestas['pregunta_129'] == 0) {
                            totalPonderacion += 1;
                        }
                        break;
                    case 'exp2Ge':
                        if (respuestas['expediente_02'] == 3) {
                            totalPonderacion += parseInt(respuesta.toString()) * (pregunta.ponderacion);
                        }
                        break;

                    default:
                        break;
                }
            }
        });


    } catch (error) {
        console.error('Error posting data:', error);
    }
};
