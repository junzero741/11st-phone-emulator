import images from '../../images';
import { HTMLElementEvent } from '../types';

const photo = () => {
  const photoList = <HTMLUListElement>document.querySelector('.photo__list');

  // 이미지 파일 불러와서 섬네일 만들기
  const makePhotoBoxWithThumbnail = (imageFile: string): HTMLLIElement => {
    const li = document.createElement('li');
    li.classList.add('photo__box');
    const img = document.createElement('img');
    img.classList.add('photo__thumbnail');
    img.src = `${imageFile}`;
    li.appendChild(img);
    return li;
  };

  // 이미지 섬네일 렌더링
  const renderPhotoThumbnails = () => {
    images.forEach((image) => {
      const photoBox: HTMLLIElement = makePhotoBoxWithThumbnail(image);
      photoList.appendChild(photoBox);
    });
  };

  // 선택된 이미지 외 모든 이미지 섬네일 선택해제
  const unfocusAllPhoto = () => {
    photoList.childNodes.forEach((li: HTMLLIElement) => {
      li.childNodes.forEach((img: HTMLImageElement) => {
        img.classList.remove('focused');
      });
    });
  };

  // 이미지 섬네일 클릭시 해당 이미지 경계선추가
  const onThumbnailClick = () => {
    const thumbs = document.querySelectorAll('.photo__thumbnail');
    thumbs.forEach((thumb: HTMLImageElement) => {
      thumb.addEventListener('click', (e: HTMLElementEvent<HTMLImageElement>) => {
        unfocusAllPhoto();
        e.target.classList.add('focused');
        renderPhotoOnMain(e.target);
      });
    });
  };

  // 선택된 이미지 메인에 렌더링
  const renderPhotoOnMain = (selectedPhoto: HTMLImageElement) => {
    const container = document.querySelector('.photo__main__box');
    container.innerHTML = '';
    const image = document.createElement('img');
    image.classList.add('photo__main__content');
    image.src = selectedPhoto.src;
    container.appendChild(image);
  };

  renderPhotoThumbnails();
  onThumbnailClick();
};

export default photo;
