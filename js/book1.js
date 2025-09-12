async function fetchBooks(query) {
    const REST_API_KEY = 'c6423f5c49903c68b72484770a57c1b0';
    const params = new URLSearchParams({
        target: "title",
        query,
        size: 20
    });
    const url = `https://dapi.kakao.com/v3/search/book?${params}`;

    const response = await fetch(url, {
        method: 'GET',
        headers: {
            Authorization: `KakaoAK ${REST_API_KEY}`
        }
    });

    if (!response.ok) {
        throw new Error(`HTTP 오류: ${response.status}`);
    }

    return response.json();
}
async function bookData() {
    try {
    const querys = ["가공범","혼모노","팩트풀니스","편안함의습격","키메라의땅1","고전이답했다","주식투자의기쁨"];

        for (let i=0;  i<7; i++) {
            const data = await fetchBooks(querys[i]);


            const boxElements = document.querySelectorAll(".bs1");

            // documents 데이터를 각 box에 대응하여 렌더링
                const doc = data.documents[0];
                console.log(data)

                if (!doc) return; // 데이터가 부족할 경우 생략

                // <img>
                const img = document.createElement("img");
                img.src = doc.thumbnail;
                boxElements[i].appendChild(img);

                // <h3> 제목
                const h3 = document.createElement("h3");
                h3.textContent = doc.title;
                boxElements[i].appendChild(h3);

                // <h6> 저자
                const h6 = document.createElement("h6");
                h6.textContent = doc.authors;
                boxElements[i].appendChild(h6);

                // // <p> 내용 일부
                // const p = document.createElement("p");
                // p.textContent = doc.reading;
                // boxElements[i].appendChild(p);

                // // <button>
                // const btn = document.createElement("button");
                // btn.textContent = "click";
                // boxElements[i].appendChild(btn);
                // console.log("d")
        };
    

    } catch (error) {
        console.log('에러발생', error);
    }
}

bookData();