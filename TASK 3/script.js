// Main function to caluclate the temperature
////////////////////////////////////////////////////////////////////////////////////////
const calculateTemp =() =>{

    // Getting all the necessary user inputs

    const numberTemp = document.getElementById('temp').value;
    //console.log(numberTemp);

   const tempselectedInput = document.getElementById('temp_diff1');
   const valueInput = tempselectedInput.options[tempselectedInput.selectedIndex].value;
   // console.log(valueInput)

    const tempSelected = document.getElementById('temp_diff');
    const valueTemp =  temp_diff.options[tempSelected.selectedIndex].value;
    //   console.log(valueTemp);
///////////////////////////////////////////////////////////////////////////////////////
   // All fahrenheit functions
  const fartoFar =(far)=>{
      let fahrenheit = Math.round((far));
      return fahrenheit;
  }

   const fartoCel =(far) =>{
       let celsius = Math.round((far-32)*5/9);
       return celsius
   }

   const fartoKel =(far) =>{
       let kelvin = Math.round((fartoCel(far))+273.15);
       return kelvin;
   }
   

    // All celsius functions
    const celtoCel =(cel) =>{
        let celsius = Math.round(cel);
        return celsius;
    }

    const celtoFar = (cel) =>{
        let fahrenheit = Math.round((cel*9/5) + 32);
        return fahrenheit;
    }

    const celtoKel = (cel) =>{
        let kelvin = Math.round(cel*1.0+273.15);
        return kelvin;
    }

    // All kelvin functions
    const keltoKel = (kel) =>{
        let kelvin = Math.round(kel);
        return kelvin;
    }

    const keltoCel = (kel) =>{
        let kelvin = Math.round(kel*1.0-273.15);
        return kelvin;
    }

    const keltoFar = (kel) =>{
        let kelvin = Math.round((kel-273.15)*9/5 + 32);
        return kelvin;
    }
/////////////////////////////////////////////////////////////////////////////////////////

    // All necessary calculations:
    let result;

    if(valueInput=='celI')
    {
        if(valueTemp=='fah')
        {
            result = celtoFar(numberTemp);
            document.getElementById('resultContainer').innerHTML = `${result}°Fahrenheit`;
        }
        else if(valueTemp=='kel')
        {
            result = celtoKel(numberTemp);
            document.getElementById('resultContainer').innerHTML = `${result}Kelvin`;
        }
        else
        {
            result = celtoCel(numberTemp);
            document.getElementById('resultContainer').innerHTML = `${result}°Celsius`;
        }
    }
    else if(valueInput=='FarI')
    {
        if(valueTemp=='fah')
        {
            result = fartoFar(numberTemp);
            document.getElementById('resultContainer').innerHTML = `${result}°Fahrenheit`;
        }
        else if(valueTemp=='kel')
        {
            result = fartoKel(numberTemp);
            document.getElementById('resultContainer').innerHTML = `${result}Kelvin`;
        }
        else
        {
            result = fartoCel(numberTemp);
            document.getElementById('resultContainer').innerHTML = `${result}°Celsius`;
        }
    }
    else
    {
        if(valueTemp=='fah')
        {
            result = keltoFar(numberTemp);
            document.getElementById('resultContainer').innerHTML = `${result}°Fahrenheit`;
        }
        else if(valueTemp=='kel')
        {
            result = keltoKel(numberTemp);
            document.getElementById('resultContainer').innerHTML = `${result}Kelvin`;
        }
        else
        {
            result = keltoCel(numberTemp);
            document.getElementById('resultContainer').innerHTML = `${result}°Celsius`;
        }
    }
}
//END