import { useModal } from '../src'; // swap '../src' for '../dist/build.bundle' to demo production build

const ModalHookDemo = () => {
  const modalContext = useModal();
  console.log(modalContext);
  return null;
};

export default ModalHookDemo;
