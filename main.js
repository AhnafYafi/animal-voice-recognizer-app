function startClassification()
{
navigator.mediaDevices.getUserMedia({audio:true});
classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/w5Lghn1fT/model.json' ,modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}
function gotResults(error,results)
{
    if (error) {
        console.error(error);
      } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;
    
        document.getElementById("result_label").innerHTML = 'The Animal Is - '+ results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - '+ (results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
        document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
    
        img = document.getElementById('dog') 
        img1 = document.getElementById('Cat')
        img2 = document.getElementById('Cow')
        img3 = document.getElementById('Sheep')
        img4 = document.getElementById('Lion')
        img5 = document.getElementById('Ear')
        
    
        if (results[0].label == "dog") {
          img.src = 'dog.gif';
        } else if (results[0].label == "Cat") {
          img1.src = 'cat.gif';
        } else if (results[0].label == "Cow") {
          img2.src = 'cow.gif';
        }else if (results[0].label == "Sheep")
          img3.src = 'Sheep.gif';
         else if (results[0].label == "lion")
          img4.src = 'lion.gif';
         else
         img5.src = "ear.png"
    
        }
      }
    
    

