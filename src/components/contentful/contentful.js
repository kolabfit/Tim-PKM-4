import { createClient } from 'contentful';

// Membuat client untuk mengakses data Contentful
const client = createClient({
  space: 'vfmnbcdwmi0d',  // Ganti dengan Space ID kamu
  accessToken: 'MgyCclzUor3zFtXzR7hqonnCxkbAN_OefAry_hsdmS4'  // Ganti dengan Delivery Access Token kamu
});

// Fungsi untuk mengambil entri berdasarkan content type 'galleryImg'
export async function getGalleryImages() {
  try {
    const entries = await client.getEntries({
      content_type: 'galleryImg'  // Menentukan content type yang ingin diambil
    });
    return entries.items;
  } catch (error) {
    console.error('Terjadi kesalahan saat mengambil data:', error);
    return [];
  }
}

// Fungsi untuk mengambil entri berdasarkan content type 'galleryVid'
export async function getGalleryVideos() {
  try {
    const entries = await client.getEntries({
      content_type: 'galleryVid'  // Menentukan content type yang ingin diambil
    });
    return entries.items;
  } catch (error) {
    console.error('Terjadi kesalahan saat mengambil data:', error);
    return [];
  }
}

// Fungsi untuk mengambil entri gambar dari asset menggunakan ID
export async function getImage(assetId) {
  try {
    const asset = await client.getAsset(assetId);
    return asset;
  } catch (error) {
    console.error('Terjadi kesalahan saat mengambil asset:', error);
    return null;
  }
}


export async function getBannerImage() {
  try {
    const entries = await client.getEntries({
      content_type: 'bannerImg'  // Menentukan content type yang ingin diambil
    });
    return entries.items;
  } catch (error) {
    console.error('Terjadi kesalahan saat mengambil data:', error);
    return [];
  }
}