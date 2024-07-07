<h1>Hello people so uhm since my files is public ima make a form to upload your real files so yeah</h1>
<a href="https://github.com/JcNooblol2/JcReal-Storage/issues"  target="_blank">Submit a issue to upload your real file.</a>

<h1>A trash Question:</h1>
<br><br>
<h3>Does it allow any files?</h3>
<p>Yes but uhm yeah thers a folder called public assets</p>
<br>
<h3>Can i upload a movie on the files?</h3>
<p>Nope github has a limit on file like 100mb i thin the minimum on github site  is 50mb so yeah</p>


<h3> uhm what if the file is not supported on issue on github?</h3>
<p>ok so uhm make a issue then go to this website <a href='https://go.jcmainclr.xyz/files'>cool submittion</a> then screenshot the file you wanted to submit on issue then same thing if the issue said: 'solved' it is uploaded and the  file url will gave it also yeah</p>


<h3>How can i find my file?</h3>

<p>on the issue you make on github the mod or the owner of the site will give you the link of your cool file so yeah</p>

<h3>how do i know if my file is uploaded</h3>
<p>so uhm to know it will says solved so the file has been uploaded on the github repo so yeah</p>

<h3>are you going to manualy to make like the folder to uh list the files?</h3>

<p>yes but the sample like: yourname/yourfolder/index.html but the index.html is yours but ima give you the code: </p>
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Directory: /yourfoldername (you can edit this real) </title>
</head>
<body>

    <h1>Directory: /upload</h1>
    <a href="/">🏠</a> 
    <input type="text" id="searchInput" placeholder="Type to search">
    <ul id="fileList"></ul>

    <script>
         //cool
        fetch('https://api.github.com/repos/Jcnob/jcnoob.github.io/contents/yourfoldername?ref=main')
            .then(response => response.json())
            .then(data => {
                const fileList = document.getElementById('fileList');
                const searchInput = document.getElementById('searchInput');
                const filterFiles = () => {
                    const searchTerm = searchInput.value.toLowerCase();

                    fileList.innerHTML = ''; // Clear the previous list

                    data.forEach(item => {
                        const itemName = item.name.toLowerCase();

                        if (item.type === 'file' && itemName.includes(searchTerm)) {
                            const listItem = document.createElement('div');
                            const link = document.createElement('a');
                            link.href = `https://files.jcmainclr.xyz/yourfoldername/${item.name}`;
                            link.textContent = item.name;
                            listItem.appendChild(link);
                            fileList.appendChild(listItem);
                        } else if (item.type === 'dir' && itemName.includes(searchTerm)) {
                            const listItem = document.createElement('div');
                            const link = document.createElement('a');
                            link.href = `https://files.jcmainclr.xyz/yourfoldername/${item.name}`;
                            link.textContent = item.name + '/';
                            listItem.appendChild(link);
                            fileList.appendChild(listItem);
                        }

                    });
                };
                filterFiles();
                searchInput.addEventListener('input', filterFiles);
            })
            .catch(error => console.error('Error fetching file list:', error));
    </script>
</body>
</html>
<style>
    body{
        background-color: #2E3440;
        color: #fff;
        font-family: 'Roboto',sans-serif;
    }
    .neger{color: #fff;  background-color: #2E3440;  border: 3px solid #fff; font-size: 30px;}
</style>
```
<b> but if you want a add background you cant also customize it yea<b> 

<h2> Last Update July 7 2024 (gotta update some cool grammars or mistak on da spelling ye ) </h2>
