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
    const querys = ["볼","로맨스","독자시점","무(한)과금","치트캐릭터로게임","수라전설독룡","레벨업"];

        for (let i=0;  i<7; i++) {
            const data = await fetchBooks(querys[i]);


            const boxElements = document.querySelectorAll(".bs3");

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
                h3.textContent = doc.title.substring(0, 22);
                boxElements[i].appendChild(h3);

                // <h6> 저자
                const h6 = document.createElement("h6");
                h6.textContent = doc.authors;
                boxElements[i].appendChild(h6);

                // // <p> 내용 일부
                // const p = document.createElement("p");
                // p.textContent = doc.contents.substring(0, 60);
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