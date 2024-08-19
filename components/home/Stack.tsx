import React from "react";
import Image from "next/image";

const Stack = () => {
  return (
    <div className="my-10 sm:my-14">
      <h2 className="mb-5 font-medium text-raisin dark:text-snow">
        📦 Stacks.
      </h2>

      <div className="space-y-3">
        <dl className="flex flex-col sm:flex-row gap-1">
          <dd>
            <ul>
              <li className="me-1 mx-2 inline-flex items-center text-sm text-raisin dark:text-snow">
                <Image
                  className="shrink-0 me-1 w-[36px] h-auto"
                  src="/stacks/javascript.webp"
                  alt="JavaScript"
                  width={32}
                  height={32}
                />
              </li>
              <li className="me-1 mx-2 inline-flex items-center text-sm text-raisin dark:text-snow">
                <Image
                  className="shrink-0 me-1 w-[36px] h-auto"
                  src="/stacks/typescript.webp"
                  alt="TypeScript"
                  width={32}
                  height={32}
                />
              </li>
              <li className="me-1 mx-2 inline-flex items-center text-sm text-raisin dark:text-snow">
                <Image
                  className="shrink-0 me-1 w-[36px] h-auto"
                  src="/stacks/ruby.webp"
                  alt="Ruby"
                  width={32}
                  height={32}
                />
              </li>
              <li className="me-1 mx-2 inline-flex items-center text-sm text-raisin dark:text-snow">
                <Image
                  className="shrink-0 me-1 w-[36px] h-auto"
                  src="/stacks/dart.webp"
                  alt="Dart"
                  width={32}
                  height={32}
                />
              </li>
            </ul>
          </dd>
        </dl>

        <dl className="flex flex-col sm:flex-row gap-1">
          <dd>
            <ul>
              <li className="me-1 mx-2 inline-flex items-center text-sm text-raisin dark:text-snow">
                <Image
                  className="shrink-0 me-1 w-[36px] h-auto"
                  src="/stacks/react.webp"
                  alt="React"
                  width={34}
                  height={34}
                />
              </li>
              <li className="me-1 mx-2 inline-flex items-center text-sm text-raisin dark:text-snow">
                <Image
                  className="shrink-0 me-1 w-[36px] h-auto"
                  src="/stacks/nextjs.webp"
                  alt="Next"
                  width={32}
                  height={32}
                />
              </li>
              <li className="me-1 mx-2 inline-flex items-center text-sm text-raisin dark:text-snow">
                <Image
                  className="shrink-0 me-1 w-[36px] h-auto"
                  src="/stacks/rails.webp"
                  alt="Rails"
                  width={32}
                  height={32}
                />
              </li>
              <li className="me-1 mx-2 inline-flex items-center text-sm text-raisin dark:text-snow">
                <Image
                  className="shrink-0 me-1 w-[30px] h-auto"
                  src="/stacks/flutter.webp"
                  alt="Flutter"
                  width={28}
                  height={28}
                />
              </li>
            </ul>
          </dd>
        </dl>

        <dl className="flex flex-col sm:flex-row gap-1">
          <dd>
            <ul>
              <li className="me-1 mx-2 inline-flex items-center text-sm text-raisin dark:text-snow">
                <Image
                  className="shrink-0 me-1 w-[40px] h-auto"
                  src="/stacks/tailwind.webp"
                  alt="Tailwind"
                  width={36}
                  height={36}
                />
              </li>
              <li className="me-1 mx-2 inline-flex items-center text-sm text-raisin dark:text-snow">
                <Image
                  className="shrink-0 me-1 w-[36px] h-auto"
                  src="/stacks/headlessui.webp"
                  alt="Headless UI"
                  width={30}
                  height={30}
                />
              </li>
              <li className="me-1 mx-2 inline-flex items-center text-sm text-raisin dark:text-snow">
                <Image
                  className="shrink-0 me-1 w-[26px] h-auto"
                  src="/stacks/figma.webp"
                  alt="Figma"
                  width={24}
                  height={24}
                />
              </li>
              <li className="me-1 mx-2 inline-flex items-center text-sm text-raisin dark:text-snow">
                <Image
                  className="shrink-0 me-1 w-[36px] h-auto"
                  src="/stacks/canva.webp"
                  alt="Canva"
                  width={32}
                  height={32}
                />
              </li>
              <li className="me-1 mx-2 inline-flex items-center text-sm text-raisin dark:text-snow">
                <Image
                  className="shrink-0 me-1 w-[40px] h-auto"
                  src="/stacks/blender.webp"
                  alt="Blender"
                  width={36}
                  height={36}
                />
              </li>
            </ul>
          </dd>
        </dl>

        <dl className="flex flex-col sm:flex-row gap-1">
          <dd>
            <ul>
              <li className="me-1 mx-2 inline-flex items-center text-sm text-raisin dark:text-snow">
                <Image
                  className="shrink-0 me-1 w-[36px] h-auto"
                  src="/stacks/postgresql.webp"
                  alt="PosgreSQL"
                  width={32}
                  height={32}
                />
              </li>
              <li className="me-1 mx-2 inline-flex items-center text-sm text-raisin dark:text-snow">
                <Image
                  className="shrink-0 me-1 w-[36px] h-auto"
                  src="/stacks/neon.webp"
                  alt="Neon"
                  width={32}
                  height={32}
                />
              </li>
              <li className="me-1 mx-2 inline-flex items-center text-sm text-raisin dark:text-snow">
                <Image
                  className="shrink-0 me-1 w-[36px] h-auto"
                  src="/stacks/firebase.webp"
                  alt="Firebase"
                  width={32}
                  height={32}
                />
              </li>
              <li className="me-1 mx-2 inline-flex items-center text-sm text-raisin dark:text-snow">
                <Image
                  className="shrink-0 me-1 w-[36px] h-auto"
                  src="/stacks/pocketbase.webp"
                  alt="Pocketbase"
                  width={32}
                  height={32}
                />
              </li>
              <li className="me-1 mx-2 inline-flex items-center text-sm text-raisin dark:text-snow">
                <Image
                  className="shrink-0 me-1 w-[36px] h-auto"
                  src="/stacks/graphql.webp"
                  alt="GraphQL"
                  width={32}
                  height={32}
                />
              </li>
            </ul>
          </dd>
        </dl>

        <dl className="flex flex-col sm:flex-row gap-1">
          <dd>
            <ul>
              <li className="me-1 mx-2 inline-flex items-center text-sm text-raisin dark:text-snow">
                <Image
                  className="shrink-0 me-1 w-[36px] h-auto"
                  src="/stacks/playwright.webp"
                  alt="Playwright"
                  width={32}
                  height={32}
                />
              </li>
              <li className="me-1 mx-2 inline-flex items-center text-sm text-raisin dark:text-snow">
                <Image
                  className="shrink-0 me-1 w-[32px] h-auto"
                  src="/stacks/cucumber.webp"
                  alt="Cucumber"
                  width={30}
                  height={30}
                />
              </li>
              <li className="me-1 mx-2 inline-flex items-center text-sm text-raisin dark:text-snow">
                <Image
                  className="shrink-0 me-1 w-[36px] h-auto"
                  src="/stacks/postman.webp"
                  alt="Postman"
                  width={32}
                  height={32}
                />
              </li>
              <li className="me-1 mx-2 inline-flex items-center text-sm text-raisin dark:text-snow">
                <Image
                  className="shrink-0 me-1 w-[36px] h-auto"
                  src="/stacks/swagger.webp"
                  alt="Swagger"
                  width={32}
                  height={32}
                />
              </li>
            </ul>
          </dd>
        </dl>

        <dl className="flex flex-col sm:flex-row gap-1">
          <dd>
            <ul>
              <li className="me-1 mx-2 inline-flex items-center text-sm text-raisin dark:text-snow">
                <Image
                  className="shrink-0 me-1 w-[36px] h-auto"
                  src="/stacks/netlify.webp"
                  alt="Netlify"
                  width={32}
                  height={32}
                />
              </li>
              <li className="me-1 mx-2 inline-flex items-center text-sm text-raisin dark:text-snow">
                <Image
                  className="shrink-0 me-1 w-[36px] h-auto"
                  src="/stacks/docker.webp"
                  alt="Docker"
                  width={32}
                  height={32}
                />
              </li>
              <li className="me-1 mx-2 inline-flex items-center text-sm text-raisin dark:text-snow">
                <Image
                  className="shrink-0 me-1 w-[36px] h-auto"
                  src="/stacks/vscode.webp"
                  alt="VS Code"
                  width={32}
                  height={32}
                />
              </li>
              <li className="me-1 mx-2 inline-flex items-center text-sm text-raisin dark:text-snow">
                <Image
                  className="shrink-0 me-1 w-[36px] h-auto"
                  src="/stacks/npm.webp"
                  alt="NPM"
                  width={32}
                  height={32}
                />
              </li>
            </ul>
          </dd>
        </dl>

        <dl className="flex flex-col sm:flex-row gap-1">
          <dd>
            <ul>
              <li className="me-1 after:content-[','] inline-flex items-center text-sm text-raisin dark:text-snow">
                Web Development
              </li>
              <li className="me-1 after:content-[','] inline-flex items-center text-sm text-raisin dark:text-snow">
                Project Management
              </li>
              <li className="me-1 inline-flex items-center text-sm text-raisin dark:text-snow">
                Mobile Apps
              </li>
              <li className="me-1 after:content-['.'] inline-flex items-center text-sm text-raisin dark:text-snow">
                & Testing
              </li>
            </ul>
          </dd>
        </dl>

        <dl className="flex flex-col sm:flex-row gap-1">
          <dd>
            <ul>
              <li className="me-1 after:content-[','] inline-flex items-center text-sm text-raisin dark:text-snow">
                Strong communication
              </li>
              <li className="me-1 after:content-[','] inline-flex items-center text-sm text-raisin dark:text-snow">
                Problem-solving
              </li>
              <li className="me-1 inline-flex items-center text-sm text-raisin dark:text-snow">
                Attention to detail
              </li>
              <li className="me-1 after:content-['.'] inline-flex items-center text-sm text-raisin dark:text-snow">
                & Time management
              </li>
            </ul>
          </dd>
        </dl>
      </div>
    </div>
  );
};

export default Stack;
