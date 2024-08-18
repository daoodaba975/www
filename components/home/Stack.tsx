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
          <dt className="min-w-40">
            <span className="block text-sm text-raisin dark:text-snow">
              Design :
            </span>
          </dt>
          <dd>
            <ul>
              <li className="me-1 after:content-[','] inline-flex items-center text-sm text-raisin dark:text-snow">
                <Image
                  className="shrink-0 me-1 w-[10px] h-auto"
                  src="/stacks/figma.webp"
                  alt="Figma"
                  width={12}
                  height={12}
                />
                Figma
              </li>
              <li className="me-1 after:content-[','] inline-flex items-center text-sm text-raisin dark:text-snow">
                <Image
                  className="shrink-0 me-1 w-[12px] h-auto"
                  src="/stacks/canva.webp"
                  alt="Canva"
                  width={16}
                  height={16}
                />
                Canva
              </li>
              <li className="me-1 after:content-['.'] inline-flex items-center text-sm text-raisin dark:text-snow">
                <Image
                  className="shrink-0 me-1 w-[12px] h-auto"
                  src="/stacks/blender.webp"
                  alt="Blender"
                  width={16}
                  height={16}
                />
                Blender
              </li>
            </ul>
          </dd>
        </dl>

        <dl className="flex flex-col sm:flex-row gap-1">
          <dt className="min-w-40">
            <span className="block text-sm text-raisin dark:text-snow">
              Languages :
            </span>
          </dt>
          <dd>
            <ul>
              <li className="me-1 after:content-[','] inline-flex items-center text-sm text-raisin dark:text-snow">
                <Image
                  className="shrink-0 me-1 w-[12px] h-auto"
                  src="/stacks/javascript.webp"
                  alt="JavaScript"
                  width={16}
                  height={16}
                />
                JavaScript
              </li>
              <li className="me-1 after:content-[','] inline-flex items-center text-sm text-raisin dark:text-snow">
                <Image
                  className="shrink-0 me-1 w-[12px] h-auto"
                  src="/stacks/typescript.webp"
                  alt="TypeScript"
                  width={16}
                  height={16}
                />
                TypeScript
              </li>
              <li className="me-1 after:content-[','] inline-flex items-center text-sm text-raisin dark:text-snow">
                <Image
                  className="shrink-0 me-1 w-[12px] h-auto"
                  src="/stacks/dart.webp"
                  alt="Dart"
                  width={16}
                  height={16}
                />
                Dart
              </li>
              <li className="me-1 after:content-['.'] inline-flex items-center text-sm text-raisin dark:text-snow">
                <Image
                  className="shrink-0 me-1 w-[12px] h-auto"
                  src="/stacks/ruby.webp"
                  alt="Ruby"
                  width={16}
                  height={16}
                />
                Ruby
              </li>
            </ul>
          </dd>
        </dl>

        <dl className="flex flex-col sm:flex-row gap-1">
          <dt className="min-w-40">
            <span className="block text-sm text-raisin dark:text-snow">
              Frameworks :
            </span>
          </dt>
          <dd>
            <ul>
              <li className="me-1 after:content-[','] inline-flex items-center text-sm text-raisin dark:text-snow">
                <Image
                  className="shrink-0 me-1 w-[12px] h-auto"
                  src="/stacks/react.webp"
                  alt="React"
                  width={16}
                  height={16}
                />
                React
              </li>
              <li className="me-1 after:content-[','] inline-flex items-center text-sm text-raisin dark:text-snow">
                <Image
                  className="shrink-0 me-1 w-[12px] h-auto"
                  src="/stacks/nextjs.webp"
                  alt="Next"
                  width={16}
                  height={16}
                />
                Next JS
              </li>
              <li className="me-1 after:content-['.'] inline-flex items-center text-sm text-raisin dark:text-snow">
                <Image
                  className="shrink-0 me-1 w-[12px] h-auto"
                  src="/stacks/rails.webp"
                  alt="Rails"
                  width={16}
                  height={16}
                />
                Rails
              </li>
            </ul>
          </dd>
        </dl>

        <dl className="flex flex-col sm:flex-row gap-1">
          <dt className="min-w-40">
            <span className="block text-sm text-raisin dark:text-snow">
              Mobile :
            </span>
          </dt>
          <dd>
            <ul>
              <li className="me-1 after:content-['.'] inline-flex items-center text-sm text-raisin dark:text-snow">
                <Image
                  className="shrink-0 me-1 w-[12px] h-auto"
                  src="/stacks/flutter.webp"
                  alt="Flutter"
                  width={16}
                  height={16}
                />
                Flutter
              </li>
            </ul>
          </dd>
        </dl>

        <dl className="flex flex-col sm:flex-row gap-1">
          <dt className="min-w-40">
            <span className="block text-sm text-raisin dark:text-snow">
              UI :
            </span>
          </dt>
          <dd>
            <ul>
              <li className="me-1 after:content-[','] inline-flex items-center text-sm text-raisin dark:text-snow">
                <Image
                  className="shrink-0 me-1 w-[12px] h-auto"
                  src="/stacks/tailwind.webp"
                  alt="Tailwind"
                  width={16}
                  height={16}
                />
                Tailwind
              </li>
              <li className="me-1 after:content-['.'] inline-flex items-center text-sm text-raisin dark:text-snow">
                <Image
                  className="shrink-0 me-1 w-[12px] h-auto"
                  src="/stacks/headlessui.webp"
                  alt="HeroIcons"
                  width={12}
                  height={12}
                />
                HeadlessUI
              </li>
            </ul>
          </dd>
        </dl>

        <dl className="flex flex-col sm:flex-row gap-1">
          <dt className="min-w-40">
            <span className="block text-sm text-raisin dark:text-snow">
              Databases :
            </span>
          </dt>
          <dd>
            <ul>
              <li className="me-1 after:content-[','] inline-flex items-center text-sm text-raisin dark:text-snow">
                <Image
                  className="shrink-0 me-1 w-[12px] h-auto"
                  src="/stacks/redis.webp"
                  alt="Redis"
                  width={16}
                  height={16}
                />
                Redis
              </li>
              <li className="me-1 after:content-[','] inline-flex items-center text-sm text-raisin dark:text-snow">
                <Image
                  className="shrink-0 me-1 w-[12px] h-auto"
                  src="/stacks/postgresql.webp"
                  alt="PosgreSQL"
                  width={16}
                  height={16}
                />
                PosgreSQL
              </li>
              <li className="me-1 after:content-[','] inline-flex items-center text-sm text-raisin dark:text-snow">
                <Image
                  className="shrink-0 me-1 w-[10px] h-auto"
                  src="/stacks/firebase.webp"
                  alt="Firebase"
                  width={12}
                  height={12}
                />
                Firebase
              </li>
              <li className="me-1 after:content-['.'] inline-flex items-center text-sm text-raisin dark:text-snow">
                <Image
                  className="shrink-0 me-1 w-[12px] h-auto"
                  src="/stacks/pocketbase.webp"
                  alt="Pocketbase"
                  width={16}
                  height={16}
                />
                Pocketbase
              </li>
            </ul>
          </dd>
        </dl>

        <dl className="flex flex-col sm:flex-row gap-1">
          <dt className="min-w-40">
            <span className="block text-sm text-raisin dark:text-snow">
              Test :
            </span>
          </dt>
          <dd>
            <ul>
              <li className="me-1 after:content-[','] inline-flex items-center text-sm text-raisin dark:text-snow">
                <Image
                  className="shrink-0 me-1 w-[12px] h-auto"
                  src="/stacks/playwright.webp"
                  alt="Playwright"
                  width={16}
                  height={16}
                />
                Playwright
              </li>
              <li className="me-1 after:content-[','] inline-flex items-center text-sm text-raisin dark:text-snow">
                <Image
                  className="shrink-0 me-1 w-[12px] h-auto"
                  src="/stacks/cucumber.webp"
                  alt="Cucumber"
                  width={16}
                  height={16}
                />
                Cucumber
              </li>
              <li className="me-1 after:content-['.'] inline-flex items-center text-sm text-raisin dark:text-snow">
                <Image
                  className="shrink-0 me-1 w-[12px] h-auto"
                  src="/stacks/postman.webp"
                  alt="Postman"
                  width={16}
                  height={16}
                />
                Postman
              </li>
            </ul>
          </dd>
        </dl>

        <dl className="flex flex-col sm:flex-row gap-1">
          <dt className="min-w-40">
            <span className="block text-sm text-raisin dark:text-snow">
              Tools :
            </span>
          </dt>
          <dd>
            <ul>
              <li className="me-1 after:content-[','] inline-flex items-center text-sm text-raisin dark:text-snow">
                <Image
                  className="shrink-0 me-1 w-[12px] h-auto"
                  src="/stacks/docker.webp"
                  alt="Docker"
                  width={16}
                  height={16}
                />
                Docker
              </li>
              <li className="me-1 after:content-[','] inline-flex items-center text-sm text-raisin dark:text-snow">
                <Image
                  className="shrink-0 me-1 w-[12px] h-auto"
                  src="/stacks/graphql.webp"
                  alt="GraphQL"
                  width={16}
                  height={16}
                />
                GraphQL
              </li>
              <li className="me-1 after:content-[','] inline-flex items-center text-sm text-raisin dark:text-snow">
                <Image
                  className="shrink-0 me-1 w-[12px] h-auto"
                  src="/stacks/swagger.webp"
                  alt="Swagger"
                  width={16}
                  height={16}
                />
                Swagger
              </li>
              <li className="me-1 after:content-[','] inline-flex items-center text-sm text-raisin dark:text-snow">
                <Image
                  className="shrink-0 me-1 w-[12px] h-auto"
                  src="/stacks/npm.webp"
                  alt="NPM"
                  width={16}
                  height={16}
                />
                NPM
              </li>
              <li className="me-1 after:content-['.'] inline-flex items-center text-sm text-raisin dark:text-snow">
                <Image
                  className="shrink-0 me-1 w-[12px] h-auto"
                  src="/stacks/vscode.webp"
                  alt="VS Code"
                  width={16}
                  height={16}
                />
                VS Code
              </li>
            </ul>
          </dd>
        </dl>

        <dl className="flex flex-col sm:flex-row gap-1">
          <dt className="min-w-40">
            <span className="block text-sm text-raisin dark:text-snow">
              Expertise :
            </span>
          </dt>
          <dd>
            <ul>
              <li className="me-1 after:content-[','] inline-flex items-center text-sm text-raisin dark:text-snow">
                Web Development
              </li>
              <li className="me-1 after:content-[','] inline-flex items-center text-sm text-raisin dark:text-snow">
                Project Management
              </li>
              <li className="me-1 after:content-[','] inline-flex items-center text-sm text-raisin dark:text-snow">
                Mobile Apps
              </li>
              <li className="me-1 after:content-['.'] inline-flex items-center text-sm text-raisin dark:text-snow">
                Testing
              </li>
            </ul>
          </dd>
        </dl>

        <dl className="flex flex-col sm:flex-row gap-1">
          <dt className="min-w-40">
            <span className="block text-sm text-raisin dark:text-snow">
              Soft Skills :
            </span>
          </dt>
          <dd>
            <ul>
              <li className="me-1 after:content-[','] inline-flex items-center text-sm text-raisin dark:text-snow">
                Strong communication
              </li>
              <li className="me-1 after:content-[','] inline-flex items-center text-sm text-raisin dark:text-snow">
                Problem-solving
              </li>
              <li className="me-1 after:content-[','] inline-flex items-center text-sm text-raisin dark:text-snow">
                Attention to detail
              </li>
              <li className="me-1 after:content-['.'] inline-flex items-center text-sm text-raisin dark:text-snow">
                Time management
              </li>
            </ul>
          </dd>
        </dl>
      </div>
    </div>
  );
};

export default Stack;
