import dotenv from 'dotenv';
dotenv.config();

async function ping() {
  const url = "https://api.alldebrid.com/v4/ping";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error.message);
  }
}

async function authenticate(){
    const url = 'https://api.alldebrid.com/v4/user';

    try{
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${process.env.ALLDEBRID_API}`,
            },
        });
        if(!response.ok){
            throw new Error(`Response status: ${response.status}`);
        }

        const result = await response.json();
        console.log(result);
    }catch (error){
        console.error(error.message);
    }
}

async function download(link_url){
    const url = 'https://api.alldebrid.com/v4/link/unlock';

    try{
        const response = await fetch(url, {
            method:"POST",
            headers:{
                Authorization: `Bearer ${process.env.ALLDEBRID_API}`,
            },
            body: new URLSearchParams({
                link: link_url,
            })
        });
        if(!response.ok){
            throw new Error(`Response status: ${response.status}`);
        }
        
        const result = await response.json();
        return result;
    }catch(error){
        console.error(error.message);
    }
}


export { download };

