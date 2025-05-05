const titleElement = document.querySelector("h1");
titleElement.innerText = "MESIN DATA";

const mesin_data = [];

mesin_data.push ({
    id: 1,
    nama_barang: "mobile phone",
    merk: "Samsung",
    kategori: "eletronik",
    stok: "tersedia",
    link: "https://www.samsung.com/id/",
    picture: "images_1/picture_1.jpeg",
});

mesin_data.push ({
  nama_barang: "kulkas",
  merk: "Lg",
  kategori: "eletronik",
  stok: "tersedia",
  link: "https://www.lg.com/id/",
  picture: "images_2/picture_2.avif",
});

mesin_data.push ({
  nama_barang: "macbook",
  merk: "Apple",
  kategori: "eletronik",
  stok: "tersedia",
  link: "https://www.apple.com/id/macbook-pro/",
  picture: "images_3/picture_3.jpg"
});

const tbodyElement = document.querySelector("#mesin_data-list");

function hapus(index) {
    if (confirm("apakah anda ingin menghapus data ini")) {
        mesin_data.splice(index, 1);
        tampilkandata();
    }
}

function tampilkandata() {
    tbodyElement.innerHTML = "";
  
    mesin_data.map((mesin_data, index) => {
      const no = index + 1;
  
      tbodyElement.innerHTML += `
  <tr>
  <td>${no}</td>
  <td>${mesin_data.nama_barang}</td>
  <td>${mesin_data.merk}</td>
  <td>${mesin_data.kategori}</td>
  <td>${mesin_data.stok}</td>
  <td>
  <a href="${mesin_data.link}">link</a>
  </td>
  <td>
  <img src="${mesin_data.picture}" width="50" height="60"/> 
  </td>
  
  <td>
  <button class = "btn btn-danger" type="button" onclick="hapus(${index})">hapus</button>
  </td>
  </tr>`;
    });
  }
  
  tampilkandata();
  
  const formtambahdata = document.querySelector("#tambah_data");
  formtambahdata.addEventListener("submit", (event) => {
    event.preventDefault();
    const nama_barang = document.querySelector("#nama_barang").value;
    const merk = document.querySelector("#merk").value;
    const kategori = document.querySelector("#kategori").value;
    const stok = document.querySelector("#stok").value;
    const link = document.querySelector("#link").value;
    const picture = document.querySelector("#picture").value;
  
    if (no && nama_barang && merk && kategori && stok && link && picture) {
      const data = {
        nama_barang,
        merk,
        kategori,
        stok,
        link,
        picture,
      };
      mesin_data.push(data);
      tampilkandata();
    } else {
      alert("isi data dulu");
    }
  });
  