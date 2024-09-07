import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

export const Logo: React.FC<SvgProps> = (props) => (
  <Svg
    width={120}
    height={50}
    viewBox="0 0 866 280"
    {...props}
    fill={"#FF4B44"}
  >
    <Path d="M582 47c-23 4.2-38.4 18.2-44.2 40-2.2 8.3-2.3 9.7-2.3 57 0 43.2.2 49.3 1.8 55.5 4.1 16.1 13.5 28.9 26 35.3 12.3 6.3 20 7.4 48.2 6.9 20.3-.3 23.8-.6 29.7-2.5 18.4-6.1 29.8-17.7 35.3-35.8 2.2-7.5 3.8-24 3.1-32.4-.8-9.8-3.3-14.7-14.4-28.5l-8.8-11-22.9-.3-23-.2.1 18.2.2 18.3 14.1.3 14.1.3V198l-2.9 3.2-2.9 3.3h-25.4c-23.7 0-25.5-.1-28-2-1.5-1.1-2.9-2.9-3.2-4-.3-1.1-.6-25.9-.6-55.2V90.2l2.6-3.1 2.6-3.1h52.6l2.6 3.1c2.2 2.5 2.6 4.1 2.6 9v5.9h41.1l-.6-4.8c-2.3-17.1-6.1-26-15-34.9-6.4-6.4-12.5-9.9-23.5-13.5-5.7-1.8-9.3-2.1-30.5-2.4-13.2-.1-26 .1-28.5.6zM19.2 127.7l.3 79.8 2.4 4.9c1.4 2.7 5.4 8.7 9.1 13.2 3.6 4.5 7.6 9.6 8.9 11.3l2.4 3.1H133v-37H96.6c-32.3 0-36.5-.2-37-1.6-.3-.9-.6-35.7-.6-77.5V48H19l.2 79.7zM200.7 48.7c-.3.5-1.5 4.4-2.6 8.8-1.2 4.4-2.8 10.2-3.5 13C190.2 86 183.3 111 178 130c-.9 3.6-4.3 15.7-7.5 27-7.4 26.7-7.5 26.9-8.5 31-.5 1.9-1.6 6-2.4 9-4.8 17.4-5.6 21.8-5.6 32.2V240h35.7l1.6-5.8c.9-3.1 2.3-9 3.3-12.9.9-4 2.2-7.9 2.8-8.7.6-.8 10.6-6.2 22.1-12.1 11.6-5.9 24.5-12.5 28.8-14.7 4.3-2.3 8.2-3.7 8.6-3.2.5.5 1.8 4.7 2.9 9.4 1.1 4.7 3.5 13.9 5.2 20.5 1.7 6.6 3.3 13.1 3.6 14.5.2 1.4 1.1 4.9 2 7.8l1.5 5.2 17.6-.2 17.7-.3-.3-12.5c-.2-12.1-1-16.5-5.7-32.5-.8-2.8-3.7-13.1-6.4-23-2.8-9.9-5.5-19.6-6-21.5-2.8-9.9-14.4-52.1-19.5-70.5-6.2-22.4-7.5-25.7-11.9-28.9-2.6-2-4.2-2.1-29.6-2.4-14.7-.2-27.1.1-27.3.5zm34.2 43c.7 3.2 1.9 8 2.6 10.8.8 2.7 2.6 9.9 4 16 1.4 6 3 12.6 3.6 14.5 1.9 6.9 9.9 39.9 9.9 40.9 0 .8-7.6 1.1-24.1 1.1h-24.2l.7-4.7c.3-2.6 1.1-6.1 1.6-7.8.6-1.6 2.3-8.6 4-15.5 1.6-6.9 3.4-14.1 4-16 .5-1.9 3-12.1 5.5-22.5 2.6-10.5 4.9-19.8 5.1-20.8.4-1.1 1.5-1.7 3.3-1.7 2.6 0 2.9.4 4 5.7zM328 127.6v79.6l3 6.2c1.7 3.3 6.8 10.6 11.3 16.1l8.3 10 45.2.3 45.2.2v-37h-73V48h-40v79.6zM466 144v96h40V48h-40v96zM739.5 49.2c-.5 1.7-16.1 58.2-18.5 67.3-1 4-12.7 46-14 50.5-11.7 40.3-14 50.5-14 62.4V240h17.9c16.2 0 18-.2 18.5-1.8.3-.9 1.9-7.1 3.5-13.6 1.7-6.5 3.4-12.2 3.8-12.6 1.2-1.1 58-30 58.9-30 .5 0 1.9 4.4 3.2 9.8 1.3 5.3 2.8 11 3.3 12.7.5 1.6 2.1 7.9 3.5 14 1.4 6 3.2 13.4 4.1 16.3l1.4 5.2H847v-10.3c0-6.7-.7-12.8-1.9-17.7-2-7.9-6.9-26-12.6-46.3-.8-2.8-2.6-9.5-4-14.7-1.4-5.2-3.2-11.8-4-14.5-1.4-4.8-6-21.2-9-32.5-.8-3-3.1-11.1-5.1-18-1.9-6.9-4.2-15.2-5-18.5-2.8-11.6-5.3-15.6-11.1-18.1-4.5-1.9-54.1-2-54.8-.2zm39.9 64.5c3.8 15.3 7.2 29.1 7.7 30.8 1.7 5.9 6.9 27.8 6.9 29.1 0 1.2-4.3 1.4-24 1.4-26.9 0-25.1.6-22.9-7.4.6-2.1 1.2-4.6 1.4-5.5.2-.9 4.5-18.4 9.5-38.9l9.3-37.2h2.7c2.6 0 2.6 0 9.4 27.7z" />
  </Svg>
);
