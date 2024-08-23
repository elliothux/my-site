'use client';

import { Bento } from 'components/Bento';
import { HeroSection } from 'components/HeroSection';
import { Balancer } from 'react-wrap-balancer';

const items = [
  'TypeScript',
  'JavaScript',
  'HTML',
  'CSS',
  'NodeJS',
  'React',
  'React Native',
  'NextJS',
  'PostgreSQL',
  'NestJS',
  'Tailwind',
  'Expo',
  'GraphQL',
  'Git',
  'DevOps',
  'Linux',
  'Docker',
  'Nginx',
  'Serverless',
  'GCP',
  'Cloudflare',
  'Figma',
];

export function Stacks({ show }: { show: boolean }) {
  return (
    <HeroSection show={show} delay={2.5} className="col-span-full sm:col-span-4 md:col-span-3">
      <Bento
        title="My stacks"
        className="h-full"
        background={[310, 467, 'd32d9f91-8ed7-4220-e576-1c6b600f0500']}
        highlight="#1863CE"
      >
        <Balancer as="p" className="mt-5 font-light text-white md:text-lg">
          Proficient in comprehensive
          <br />
          <span className="underline">Web Stacks.</span>
        </Balancer>
        <Balancer as="p" className="font-light text-neutral-300 text-sm mt-4">
          Constantly learning and mastering new technologies to stay at the forefront of tech innovations.
        </Balancer>
        <svg
          viewBox="0 0 262 144"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="px-0 mt-6 mb-7 max-w-[70vw] md:w-[110%] md:-ml-[5%] mx-auto"
        >
          {icons}
        </svg>
        <div className="flex items-start justify-start flex-wrap gap-1.5 text-blue-600 text-[0.7em]">
          {items.map((item) => (
            <div key={item} className="bg-white px-2 rounded-md">
              {item}
            </div>
          ))}
        </div>
      </Bento>
    </HeroSection>
  );
}

const icons = (
  <>
    <path
      d="M223.332 15.548A6.548 6.548 0 01229.88 9h11.236a6.549 6.549 0 013.593 12.024 6.549 6.549 0 01-3.593 12.024h-.142a6.525 6.525 0 01-4.403-1.701v6.034c0 3.664-3.009 6.619-6.655 6.619-3.608 0-6.584-2.923-6.584-6.548a6.541 6.541 0 012.956-5.476 6.541 6.541 0 01-2.956-5.476 6.544 6.544 0 012.956-5.476 6.544 6.544 0 01-2.956-5.476zm11.094 6.549h-4.546a4.403 4.403 0 00-.028 8.806h4.574v-8.806zm2.145 4.403a4.403 4.403 0 004.403 4.404h.142a4.404 4.404 0 100-8.807h-.142a4.403 4.403 0 00-4.403 4.403zm-6.691 6.548h-.028a4.403 4.403 0 00-4.375 4.404c0 2.423 1.998 4.403 4.439 4.403 2.48 0 4.51-2.012 4.51-4.474v-4.333h-4.546zm0-21.903a4.403 4.403 0 000 8.807h4.546v-8.807h-4.546zm6.691 8.807h4.545a4.404 4.404 0 100-8.807h-4.545v8.807z"
      fill="url(#paint0_linear_34_413)"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M22 10a4 4 0 014-4h22a4 4 0 014 4v22a4 4 0 01-4 4H26a4 4 0 01-4-4V10zm24.419 13.744c-.047-.514-.255-.914-.624-1.2-.365-.29-.887-.434-1.565-.434-.449 0-.823.058-1.122.175-.3.117-.524.279-.674.484a1.17 1.17 0 00-.231.695c-.01.215.032.404.126.568.098.164.238.309.42.435.188.122.412.23.674.323.262.093.557.175.884.245l1.235.28a8.7 8.7 0 011.88.618 5.08 5.08 0 011.375.92c.374.355.657.764.85 1.227.19.463.29.982.294 1.558-.005.907-.234 1.686-.688 2.336-.453.65-1.106 1.148-1.957 1.494-.847.346-1.869.52-3.066.52-1.202 0-2.25-.18-3.143-.54-.893-.361-1.588-.908-2.084-1.643-.495-.734-.75-1.662-.764-2.785h3.325c.028.463.152.85.372 1.158.22.308.521.542.905.701.388.16.837.239 1.347.239.468 0 .865-.063 1.193-.19.332-.126.587-.301.764-.526.178-.224.27-.481.274-.771a1.063 1.063 0 00-.253-.695c-.163-.196-.416-.365-.757-.505a7.78 7.78 0 00-1.291-.4l-1.502-.35c-1.244-.286-2.224-.747-2.94-1.383-.715-.64-1.07-1.506-1.066-2.596-.004-.888.234-1.667.716-2.336.482-.669 1.148-1.19 2-1.564.85-.375 1.821-.562 2.911-.562 1.113 0 2.079.19 2.898.569.823.374 1.461.9 1.915 1.578.454.678.685 1.464.694 2.357H46.42zm-21.606-4.307v2.82h4.363v11.548H32.6V22.257h4.357v-2.82H24.812z"
      fill="url(#paint1_linear_34_413)"
    />
    <path
      d="M103.5 66.66c1.868 0 3.392 1.484 3.392 3.34 0 1.768-1.524 3.27-3.392 3.27-1.868 0-3.392-1.502-3.392-3.27 0-1.856 1.524-3.34 3.392-3.34zm-8.399 17.482c1.143.671 3.646-.354 6.531-3.005a42.877 42.877 0 01-2.74-3.36 42.204 42.204 0 01-4.353-.636c-.925 3.783-.58 6.382.562 7zm1.288-10.147l-.526-.901c-.2.512-.399 1.025-.526 1.52a29.2 29.2 0 001.596.282l-.544-.901zm11.864-1.344L109.722 70l-1.469-2.651c-.545-.937-1.125-1.768-1.651-2.6-.98-.052-2.014-.052-3.102-.052s-2.122 0-3.102.053c-.526.83-1.106 1.662-1.65 2.599L97.277 70l1.47 2.651c.544.937 1.124 1.768 1.65 2.6.98.052 2.014.052 3.102.052s2.122 0 3.102-.053c.526-.83 1.106-1.662 1.651-2.599zM103.5 60.773c-.345.388-.707.795-1.07 1.272h2.14c-.363-.477-.725-.884-1.07-1.272zm0 18.454c.345-.389.707-.795 1.07-1.272h-2.14c.363.477.725.883 1.07 1.272zm8.38-23.369c-1.124-.671-3.627.354-6.512 3.006a42.696 42.696 0 012.739 3.358c1.488.142 2.957.354 4.354.636.925-3.782.58-6.38-.581-7zm-1.269 10.147l.526.901c.199-.512.399-1.025.526-1.52a29.177 29.177 0 00-1.596-.282l.544.901zm2.63-12.462c2.666 1.485 2.957 5.391 1.832 9.952C119.68 64.82 123 67.013 123 70s-3.32 5.18-7.927 6.505c1.125 4.56.834 8.467-1.832 9.952-2.648 1.485-6.258-.212-9.741-3.447-3.483 3.235-7.093 4.932-9.76 3.447-2.647-1.485-2.938-5.391-1.813-9.952C87.319 75.18 84 72.987 84 70s3.32-5.18 7.927-6.505c-1.125-4.56-.834-8.467 1.814-9.952 2.666-1.485 6.276.212 9.759 3.447 3.483-3.235 7.093-4.932 9.741-3.447zM112.715 70a39.024 39.024 0 011.614 3.995c3.81-1.114 5.95-2.705 5.95-3.995s-2.14-2.881-5.95-3.995A39.024 39.024 0 01112.715 70zm-18.43 0a39.21 39.21 0 01-1.614-3.995c-3.81 1.114-5.95 2.705-5.95 3.995s2.14 2.881 5.95 3.995A39.21 39.21 0 0194.285 70zm16.326 3.995l-.544.901a29.273 29.273 0 001.596-.282c-.127-.495-.327-1.008-.526-1.52l-.526.901zm-5.243 7.141c2.885 2.652 5.388 3.677 6.512 3.006 1.161-.62 1.506-3.218.581-7a42.213 42.213 0 01-4.354.636 42.715 42.715 0 01-2.739 3.358zm-8.979-15.131l.544-.901c-.562.088-1.106.176-1.596.282.127.495.327 1.008.526 1.52l.526-.901zm5.243-7.141c-2.885-2.652-5.388-3.677-6.53-3.006-1.143.62-1.488 3.218-.563 7 1.439-.287 2.892-.5 4.354-.636a42.858 42.858 0 012.739-3.358z"
      fill="url(#paint2_linear_34_413)"
    />
    <path
      d="M236.278 117.446c.05-.402.088-.77.138-1.135.222-1.659.731-3.213 1.606-4.647 1.108-1.809 2.728-2.797 4.816-3.082a10.043 10.043 0 015.447.7c1.025.443 1.891 1.13 2.764 1.809.905.706 1.681 1.531 2.276 2.52.327.537.67 1.066.969 1.617.186.332.305.7.471 1.096h-.313c-.676-.008-1.357-.061-2.021.092-1.859.415-2.819 1.985-2.379 3.874.324 1.373.764 2.705 1.426 3.96.712 1.351 1.404 2.717 2.127 4.062.194.36.468.682.717 1.011.205.272.208.291-.108.416-.587.229-1.016.614-1.196 1.235a2.875 2.875 0 00-.128.656c-.108 2.235-.443 4.445-.711 6.663-.119.966-.327 1.919-.515 2.874-.178.9-.712 1.551-1.496 2.008-1.171.687-2.423 1-3.777.706a2.47 2.47 0 01-1.933-1.747 10.866 10.866 0 01-.554-3.232c-.028-2.024 0-4.051-.014-6.076.002-.46-.039-.92-.122-1.373-.193-1.011-.54-1.543-1.874-1.842-.144-.033-.294-.041-.471-.066.05-.167.083-.333.147-.488.382-.969.77-1.935 1.157-2.902a8.803 8.803 0 00.568-4.245 56.614 56.614 0 00-.385-2.96c-.213-1.36-1.119-2.21-2.523-2.437-1.035-.164-2.005.08-2.949.465-.296.122-.582.257-.875.382-.078.033-.163.053-.285.089v-.003z"
      fill="url(#paint3_linear_34_413)"
    />
    <path
      d="M238.252 109.479c-.016.03-.022.05-.036.063-1.301 1.41-2.035 3.11-2.542 4.93-.424 1.512-.521 3.051-.476 4.61.019.712.027 1.424 0 2.133-.039.983-.13 1.96-.18 2.941-.045.847-.083 1.7.18 2.52a5.53 5.53 0 001.634 2.525c.096.089.105.164.019.258-.892.991-1.778 1.985-2.678 2.968a8.053 8.053 0 01-.914.867c-.471.377-.941.382-1.445.053a3.443 3.443 0 01-.532-.438c-.595-.587-1.025-1.293-1.407-2.027a23.102 23.102 0 01-1.717-4.528c-.518-1.877-1.044-3.752-1.509-5.643a20.405 20.405 0 01-.637-5.27 9.129 9.129 0 01.537-3.127c.737-1.919 2.149-3.054 4.127-3.519a10.927 10.927 0 014.68-.022c.9.18 1.788.42 2.683.636.069.017.138.045.213.07zm10.775-1.197c.452-.072.903-.166 1.357-.207 1.634-.144 3.248-.067 4.824.429a10.055 10.055 0 014.013 2.381c.601.582.922 1.274 1.063 2.077.258 1.463.122 2.908-.268 4.323a65 65 0 01-1.432 4.716 28 28 0 01-2.113 4.583c-.357.615-.72 1.227-1.075 1.842-.055.091-.116.174-.216.097-.036-.028-.022-.153.006-.214.562-1.179.908-2.398.775-3.727-.088-.922-.146-1.85-.213-2.775a11.481 11.481 0 01.161-2.813c.296-1.698.058-3.293-.817-4.797-.944-1.614-2.177-2.976-3.55-4.231a8.683 8.683 0 00-2.124-1.373c-.114-.056-.227-.122-.338-.186-.022-.011-.036-.036-.056-.055l.003-.07z"
      fill="url(#paint4_linear_34_413)"
    />
    <path
      d="M242.121 122.516c.108 1.532-.316 2.944-.97 4.309a20.946 20.946 0 00-.664 1.548c-.092.241-.125.51-.166.77-.028.199-.083.269-.288.233-1.629-.283-2.908-1.039-3.55-2.648a5.792 5.792 0 01-.352-1.905c-.036-.792.072-1.567.174-2.348.036-.252.031-.513.028-.77a204.57 204.57 0 00-.08-2.6.35.35 0 01.152-.324c.731-.565 1.57-.87 2.465-1.042.332-.063.67-.091 1.005-.124.347-.016.693.059 1.002.219a1.27 1.27 0 01.709.816c.388 1.197.526 2.432.535 3.684v.182zm-2.354-4.303c-.38.044-.593.208-.596.493-.002.393.444.914.831.988.501.095.825-.18 1.119-.515.266-.31.233-.506-.147-.642-.39-.139-.803-.222-1.207-.324zm15.145-.631c-.075.656-.13 1.301-.222 1.944-.158 1.107-.13 2.207-.005 3.317.108.98.122 1.972.138 2.96.008.502-.208.959-.448 1.393-.02-.005-.036-.008-.042-.016-.756-1.407-1.531-2.803-2.257-4.223a7.936 7.936 0 01-.914-3.113 3.719 3.719 0 01.069-1.047c.178-.767.734-1.135 1.476-1.251.682-.111 1.363-.081 2.047-.012.05.006.1.028.158.048zm-1.64.36c-.221.016-.387.008-.542.049-.214.053-.42.134-.612.241-.147.089-.233.25-.139.438.188.379.687.581 1.174.479a.917.917 0 00.745-.892c.006-.13-.047-.21-.166-.238a6.46 6.46 0 00-.46-.077zm-14.463 16.172a4.233 4.233 0 01-1.648-.277c-.039-.014-.083-.022-.114-.047-.077-.058-.149-.125-.221-.186.083-.041.166-.102.255-.122.565-.13 1.135-.249 1.7-.373.759-.172 1.349-.604 1.819-1.213.227-.294.46-.582.698-.87.076-.086.165-.16.263-.219.2-.124.385-.105.562.042l.061.055c.693.648.707 1.15.025 1.8-.313.297-.664.551-1.005.817-.604.474-1.321.554-2.049.593-.116.005-.233 0-.346 0zm21.442-3.185c-.2.186-.352.357-.529.49-.684.518-1.473.79-2.299.972a8.237 8.237 0 01-2.863.189l-.083-.011c-.432-.086-.512-.186-.493-.629.006-.142.023-.284.053-.424a1.084 1.084 0 011.052-.905.387.387 0 01.244.072c.595.465 1.29.609 2.013.554.928-.072 1.853-.208 2.78-.316l.125.008z"
      fill="url(#paint5_linear_34_413)"
    />
    <path
      d="M195.769 78.222l-11.549-6.666a2.52 2.52 0 00-2.426 0l-11.563 6.666a2.4 2.4 0 00-1.213 2.098v13.332c0 .871.471 1.684 1.213 2.112l3.027 1.74c1.47.728 1.997.728 2.669.728 2.183 0 3.424-1.329 3.424-3.61V81.459a.322.322 0 00-.327-.327h-1.456a.322.322 0 00-.327.327v13.16c0 1.012-1.054 2.028-2.77 1.17l-3.168-1.828a.377.377 0 01-.186-.313V80.317c0-.13.07-.257.186-.313l11.535-6.68a.403.403 0 01.359 0l11.549 6.666a.359.359 0 01.186.313v13.331c0 .13-.07.257-.172.313l-11.553 6.669a.402.402 0 01-.358 0l-2.967-1.754c-.085-.042-.201-.056-.285-.014-.812.47-.97.527-1.74.798-.201.056-.472.172.098.499l3.853 2.285a2.41 2.41 0 001.213.327c.415-.014.844-.112 1.199-.341l11.549-6.666a2.43 2.43 0 001.213-2.098V80.317c0-.854-.472-1.67-1.213-2.095z"
      fill="url(#paint6_linear_34_413)"
    />
    <path
      d="M186.589 91.539c-3.055 0-3.726-.77-3.955-2.285a.323.323 0 00-.327-.285h-1.497a.322.322 0 00-.327.327c0 1.94 1.054 4.268 6.11 4.268l-.014-.014c3.653 0 5.751-1.442 5.751-3.956 0-2.481-1.684-3.153-5.238-3.624-3.582-.471-3.955-.714-3.955-1.558 0-.685.313-1.613 2.967-1.613 2.384 0 3.256.513 3.611 2.113a.349.349 0 00.327.256h1.501c.084 0 .186-.028.243-.098a.337.337 0 00.084-.257c-.243-2.756-2.071-4.04-5.766-4.04-3.283 0-5.252 1.386-5.252 3.713 0 2.528 1.955 3.228 5.126 3.54 3.783.373 4.081.929 4.081 1.67 0 1.284-1.03 1.843-3.47 1.843z"
      fill="url(#paint7_linear_34_413)"
    />
    <g clipPath="url(#clip0_34_413)">
      <path
        d="M131.7 8.7l.783-.566a.968.968 0 00-1.75.566h.967zm5.8 18.367A12.567 12.567 0 01124.933 14.5H123A14.501 14.501 0 00137.5 29v-1.933zM150.067 14.5A12.566 12.566 0 01137.5 27.067V29A14.499 14.499 0 00152 14.5h-1.933zM137.5 1.933A12.567 12.567 0 01150.067 14.5H152A14.501 14.501 0 00137.5 0v1.933zm0-1.933A14.499 14.499 0 00123 14.5h1.933A12.566 12.566 0 01137.5 1.933V0zm-4.833 23.2V8.7h-1.934v14.5h1.934zm-1.75-13.934l12.567 17.4 1.566-1.133-12.567-17.4-1.566 1.133zm11.416-1.533v11.6h1.934v-11.6h-1.934z"
        fill="url(#paint8_linear_34_413)"
      />
    </g>
    <g clipPath="url(#clip1_34_413)">
      <path
        d="M21.2 77.07c-.26 0-.502.056-.725.131.474.315.735.735.864 1.21.01.064.029.11.038.175.01.055.017.111.019.168.036.817-.215.92-.39 1.404a1.986 1.986 0 00.129 1.83c.03.072.067.14.111.205-.352-2.352 1.61-2.704 1.971-3.44.029-.641-.501-1.069-.92-1.366a2.055 2.055 0 00-1.098-.315v-.001zm2.956.53c-.036.215-.009.16-.018.27-.009.075-.009.168-.018.242-.02.075-.038.15-.066.223-.018.075-.045.15-.075.224l-.1.213c-.03.037-.047.075-.076.112l-.055.083c-.044.063-.09.125-.14.186-.055.057-.102.121-.168.168v.009c-.055.046-.11.102-.177.15-.195.148-.417.26-.622.399-.064.045-.13.084-.186.14a1.35 1.35 0 00-.177.148c-.064.055-.111.11-.166.177-.047.055-.102.12-.14.186a2.34 2.34 0 00-.13.195c-.038.075-.065.14-.102.213-.029.075-.056.14-.075.214a3.007 3.007 0 00-.065.233c-.009.037-.009.084-.018.12-.01.037-.01.075-.02.112 0 .075-.009.158-.009.233 0 .055 0 .11.01.166 0 .075.009.15.028.233.009.075.027.15.045.225.03.073.048.147.075.222.02.045.047.093.066.13l-2.139-.828a23.24 23.24 0 00-1.079-.279l-.585-.14a17.357 17.357 0 00-1.692-.25c-.019 0-.028-.009-.046-.009a16.613 16.613 0 00-2.883-.037 17.764 17.764 0 00-2.957.465l-.418.11c-.138.056-.27.12-.399.178l-.308.14c-.018.008-.036.008-.045.017-.094.047-.177.084-.26.13a4.07 4.07 0 00-.355.178c-.064.027-.129.064-.186.093a.857.857 0 01-.082.045c-.084.048-.168.094-.243.14-.077.043-.15.09-.222.14-.066.045-.13.083-.186.13-.009.01-.02.01-.029.019-.055.037-.12.084-.177.13l-.018.018-.139.111c-.018.01-.038.029-.056.038-.046.037-.093.084-.139.12-.009.02-.029.03-.038.037-.055.057-.11.104-.166.16-.01 0-.01.008-.02.017-.057.05-.113.104-.166.16-.01.008-.01.017-.02.017a2.149 2.149 0 00-.139.15c-.018.018-.045.036-.065.054-.05.059-.102.115-.159.168-.009.018-.027.029-.036.045-.075.075-.139.15-.214.225l-.027.027c-.15.16-.308.317-.476.456-.166.15-.343.288-.52.41a5.671 5.671 0 01-1.143.631 6.47 6.47 0 01-.605.224c-.39.084-.79.241-1.134.27-.075 0-.157.018-.232.027l-.233.055-.223.084c-.075.029-.149.066-.222.102-.066.047-.14.084-.206.13a1.509 1.509 0 00-.186.16c-.064.045-.13.11-.186.166-.055.065-.11.12-.157.186-.047.075-.102.14-.14.215a1.628 1.628 0 00-.13.213c-.038.084-.075.159-.102.241-.029.075-.056.16-.084.242-.018.075-.038.15-.045.225 0 .007-.01.018-.01.027-.019.084-.019.195-.029.25-.009.066-.018.12-.018.186a.986.986 0 00.111.465v.01c.028.055.066.112.103.167.036.056.075.111.12.167.047.046.102.103.16.15.054.054.112.104.175.148.223.195.279.26.567.408.046.029.093.047.15.075.009 0 .018.01.027.01 0 .019 0 .028.009.046.022.153.062.303.12.447.03.055.048.11.075.166.01.02.02.038.03.047.036.075.073.14.11.205l.139.195c.046.056.103.12.159.177.055.056.111.102.177.158 0 0 .009.009.018.009.055.046.111.093.168.13.065.045.133.086.204.12.064.038.14.075.213.104a1.1 1.1 0 00.186.064c.01.01.02.01.037.018l.12.029c-.027.502-.036.975.04 1.143.082.186.491-.381.9-1.032-.055.642-.092 1.395 0 1.618.103.233.66-.493 1.144-1.293 6.593-1.524 12.607 3.03 13.239 9.465-.12-1.005-1.358-1.561-1.925-1.422-.279.687-.753 1.571-1.514 2.12a5.972 5.972 0 00-.093-1.86 6.02 6.02 0 01-1.154 2.343c-.882.064-1.765-.363-2.23-1.005-.038-.027-.047-.083-.075-.12-.027-.065-.056-.131-.075-.195a.78.78 0 01-.056-.195c-.009-.066-.009-.131-.009-.206v-.139c.011-.066.027-.132.046-.195.02-.065.038-.129.066-.195.037-.065.065-.131.112-.195.157-.447.157-.81-.131-1.023a1 1 0 00-.177-.093c-.036-.009-.082-.027-.12-.038l-.075-.027a1.268 1.268 0 00-.195-.046.704.704 0 00-.195-.029 1.5 1.5 0 00-.204-.018c-.046 0-.093.01-.14.01-.069-.001-.138.008-.205.028-.064.009-.129.018-.195.036-.066.017-.132.039-.195.066-.065.027-.12.055-.186.084-.056.027-.111.064-.177.093-2.166 1.413-.873 4.722.605 5.68-.559.102-1.126.222-1.283.344l-.02.018c.401.241.82.447 1.256.624.595.195 1.227.37 1.506.445v.009c.77.158 1.558.215 2.343.168 4.119-.288 7.494-3.421 8.107-7.55l.056.242c.028.168.064.345.084.521v.009c.018.084.027.168.037.243v.036c.01.084.018.168.018.243.01.102.018.204.018.306v.15c0 .045.011.1.011.147 0 .057-.01.112-.01.168v.13c0 .065-.01.12-.01.186 0 .038 0 .075-.009.12 0 .066-.009.131-.009.206-.009.027-.009.055-.009.082l-.03.215c0 .028 0 .055-.007.084-.01.093-.029.177-.038.27v.018l-.055.261v.027l-.056.25c0 .011-.01.03-.01.038a2.502 2.502 0 01-.064.252v.027c-.029.093-.056.177-.075.261-.01.009-.01.018-.01.018l-.084.279c-.036.093-.064.177-.102.27-.037.093-.064.186-.102.27-.037.093-.075.175-.11.27h-.011c-.036.082-.075.175-.12.259a.491.491 0 01-.029.065c-.009.009-.009.019-.018.028a8.797 8.797 0 01-2.613 3.123c-.075.047-.148.104-.223.159-.018.018-.045.027-.064.045a4.104 4.104 0 01-.204.141l.026.056h.011l.39-.056h.009c.241-.037.483-.084.724-.13a1.69 1.69 0 00.206-.047l.13-.028c.065-.009.13-.027.195-.036.056-.02.111-.03.167-.047.93-.225 1.832-.531 2.697-.892a14.892 14.892 0 01-5.775 4.713 15.292 15.292 0 003.171-.549 14.86 14.86 0 008.786-7.02 14.848 14.848 0 01-2.501 5.979 14.688 14.688 0 002.483-2.064 14.74 14.74 0 003.915-7.902c.315 1.47.407 2.985.27 4.48 6.71-9.361.556-19.068-2.02-21.624-.009-.02-.018-.028-.018-.046-.009.009-.009.009-.009.018 0-.01 0-.01-.01-.018 0 .11-.009.222-.018.334a12.57 12.57 0 01-.093.623c-.045.204-.102.41-.157.615-.066.195-.14.399-.225.594a8.03 8.03 0 01-.278.567c-.208.364-.447.71-.715 1.032-.14.166-.288.315-.438.465-.088.08-.178.157-.27.232l-.213.186a5.21 5.21 0 01-.521.362 6.47 6.47 0 01-.549.316c-.195.093-.39.177-.585.261a6.558 6.558 0 01-1.227.335c-.215.037-.428.055-.633.075-.148.01-.297.016-.445.018a7.044 7.044 0 01-.633-.038 4.717 4.717 0 01-.632-.093 4.712 4.712 0 01-.623-.157h-.01c.206-.02.41-.038.615-.075.419-.073.83-.185 1.227-.335.204-.075.399-.168.585-.26.195-.094.372-.196.558-.307.177-.12.352-.241.52-.372.168-.13.326-.27.474-.418a5.02 5.02 0 00.437-.456c.14-.167.27-.335.39-.501.02-.029.039-.066.057-.093.093-.15.186-.299.27-.447a6.416 6.416 0 00.66-1.767c.037-.213.075-.417.093-.623.018-.213.037-.427.037-.631 0-.15-.01-.299-.019-.447a10.152 10.152 0 00-.075-.623 6.75 6.75 0 00-.138-.622c-.066-.195-.13-.4-.206-.596a6.62 6.62 0 00-.259-.576c-.104-.186-.206-.372-.317-.549a10.267 10.267 0 00-.372-.51c-.139-.159-.279-.318-.427-.475a5.82 5.82 0 00-.242-.233c-.42-.325-.855-.631-1.293-.91a1.725 1.725 0 00-.186-.093 3.618 3.618 0 00-.883-.39V77.6z"
        fill="url(#paint9_linear_34_413)"
      />
    </g>
    <g clipPath="url(#clip2_34_413)">
      <path
        d="M112.149 116.553l6.374 3.681c.296-.312.661-.55 1.066-.697.404-.146.838-.196 1.265-.146a2.772 2.772 0 012.072 1.36 2.772 2.772 0 01-1.749 4.07v7.36a2.759 2.759 0 012.112 2.851 2.757 2.757 0 01-.371 1.218 2.758 2.758 0 01-2.113 1.366 2.766 2.766 0 01-2.347-.91l-6.335 3.658c.126.379.168.782.124 1.18a2.77 2.77 0 01-2.304 2.419 2.761 2.761 0 01-3.093-3.51l-6.376-3.677a2.77 2.77 0 01-2.328.833 2.768 2.768 0 01-2.428-2.581 2.762 2.762 0 012.106-2.849l.001-7.361a2.761 2.761 0 01-2.116-2.849 2.76 2.76 0 013.698-2.438c.404.146.769.384 1.066.695l6.378-3.681a2.753 2.753 0 01.436-2.436 2.76 2.76 0 013.454-.817 2.76 2.76 0 011.408 3.261zm-.665 1.133a1.326 1.326 0 01-.075.075l8.345 14.453c.033-.012.072-.021.106-.03v-7.371a2.75 2.75 0 01-1.699-1.254 2.766 2.766 0 01-.313-2.089l.024-.093-6.388-3.691zm-3.894.076l-.078-.077-6.388 3.683c.1.348.131.713.091 1.073a2.75 2.75 0 01-1.978 2.344l-.098.027v7.372l.108.03 8.345-14.453-.002.001zm2.681.655a2.78 2.78 0 01-1.54 0l-8.343 14.452c.379.365.648.833.775 1.344h16.675c.126-.514.397-.983.779-1.348l-8.346-14.448zm1.274 20.959l6.345-3.666a2.238 2.238 0 01-.049-.183h-16.682l-.027.107 6.379 3.684a2.74 2.74 0 011.989-.844c.81 0 1.537.348 2.045.902z"
        fill="url(#paint10_linear_34_413)"
      />
    </g>
    <defs>
      <linearGradient id="paint0_linear_34_413" x1={235.498} y1={9} x2={235.498} y2={44} gradientUnits="userSpaceOnUse">
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#E2E2E2" />
      </linearGradient>
      <linearGradient id="paint1_linear_34_413" x1={37} y1={6} x2={37} y2={36} gradientUnits="userSpaceOnUse">
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#E2E2E2" />
      </linearGradient>
      <linearGradient id="paint2_linear_34_413" x1={103.5} y1={53} x2={103.5} y2={87} gradientUnits="userSpaceOnUse">
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#E2E2E2" />
      </linearGradient>
      <linearGradient
        id="paint3_linear_34_413"
        x1={245.521}
        y1={108.47}
        x2={245.521}
        y2={143.991}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#E2E2E2" />
      </linearGradient>
      <linearGradient
        id="paint4_linear_34_413"
        x1={243.214}
        y1={108.01}
        x2={243.214}
        y2={133.586}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#E2E2E2" />
      </linearGradient>
      <linearGradient
        id="paint5_linear_34_413"
        x1={248.187}
        y1={117.472}
        x2={248.187}
        y2={134.116}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#E2E2E2" />
      </linearGradient>
      <linearGradient
        id="paint6_linear_34_413"
        x1={183}
        y1={71.2448}
        x2={183}
        y2={102.757}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#E2E2E2" />
      </linearGradient>
      <linearGradient
        id="paint7_linear_34_413"
        x1={186.407}
        y1={80.7738}
        x2={186.407}
        y2={93.5636}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#E2E2E2" />
      </linearGradient>
      <linearGradient id="paint8_linear_34_413" x1={137.5} y1={0} x2={137.5} y2={29} gradientUnits="userSpaceOnUse">
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#E2E2E2" />
      </linearGradient>
      <linearGradient
        id="paint9_linear_34_413"
        x1={18.0031}
        y1={77.0706}
        x2={18.0031}
        y2={112.93}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#E2E2E2" />
      </linearGradient>
      <linearGradient
        id="paint10_linear_34_413"
        x1={109.499}
        y1={113}
        x2={109.499}
        y2={143.999}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#E2E2E2" />
      </linearGradient>
      <clipPath id="clip0_34_413">
        <path fill="#fff" transform="translate(123)" d="M0 0H29V29H0z" />
      </clipPath>
      <clipPath id="clip1_34_413">
        <path fill="#fff" transform="translate(0 77)" d="M0 0H36V36H0z" />
      </clipPath>
      <clipPath id="clip2_34_413">
        <path fill="#fff" transform="translate(94 113)" d="M0 0H31V31H0z" />
      </clipPath>
    </defs>
  </>
);
