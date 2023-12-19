import { Image } from 'react-native';

const ImageComponent = () => {
  return (
    <Image source={{ width: 150, height: 150, uri: 'https://picsum.photos/200/300?random=1' }} />
  );
};

export default ImageComponent;
