import { useState } from 'react';
import { Tab } from '@headlessui/react';
import { reviewList } from '@/app/util/constant';

type Categories = {
  '후기 보기': Array<{ id: number; title: string; reviewCount: number; }>;
  '진료비 정보 보기': Array<{ id: number; img: string; }>;
};

type Post = { id: number; title: string; reviewCount: number; }
| { id: number; img: string; };

function classNames(...classes : string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Tabs() {
  const [categories] = useState<Categories>({
    '후기 보기': reviewList,
    '진료비 정보 보기': [
      {
        id: 1,
        img: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA1MzFfMTQy%2FMDAxNjg1NTI5MjQ3MDE4.Ja5gF8sA_-s_yfvW3o6yAKVOAd8gaiuNT11GGrq-T6Ig.Vs451sL68L-F1kd2ARigGxuCdz8bzQBKzEmVueGU3AIg.PNG.nv_placemy%2F6%25BF%25F9_%25BA%25ED%25B7%25CE%25B1%25D7%25B0%25F8%25C1%25F6_00.png&type=f296_164_expire24',
      },
      {
        id: 2,
        img: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA1MzFfMTQy%2FMDAxNjg1NTI5MjQ3MDE4.Ja5gF8sA_-s_yfvW3o6yAKVOAd8gaiuNT11GGrq-T6Ig.Vs451sL68L-F1kd2ARigGxuCdz8bzQBKzEmVueGU3AIg.PNG.nv_placemy%2F6%25BF%25F9_%25BA%25ED%25B7%25CE%25B1%25D7%25B0%25F8%25C1%25F6_00.png&type=f296_164_expire24',
      },
      {
        id: 3,
        img: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA1MzFfMTQy%2FMDAxNjg1NTI5MjQ3MDE4.Ja5gF8sA_-s_yfvW3o6yAKVOAd8gaiuNT11GGrq-T6Ig.Vs451sL68L-F1kd2ARigGxuCdz8bzQBKzEmVueGU3AIg.PNG.nv_placemy%2F6%25BF%25F9_%25BA%25ED%25B7%25CE%25B1%25D7%25B0%25F8%25C1%25F6_00.png&type=f296_164_expire24',
      },
      {
        id: 4,
        img: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA1MzFfMTQy%2FMDAxNjg1NTI5MjQ3MDE4.Ja5gF8sA_-s_yfvW3o6yAKVOAd8gaiuNT11GGrq-T6Ig.Vs451sL68L-F1kd2ARigGxuCdz8bzQBKzEmVueGU3AIg.PNG.nv_placemy%2F6%25BF%25F9_%25BA%25ED%25B7%25CE%25B1%25D7%25B0%25F8%25C1%25F6_00.png&type=f296_164_expire24',
      },
      {
        id: 5,
        img: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA1MzFfMTQy%2FMDAxNjg1NTI5MjQ3MDE4.Ja5gF8sA_-s_yfvW3o6yAKVOAd8gaiuNT11GGrq-T6Ig.Vs451sL68L-F1kd2ARigGxuCdz8bzQBKzEmVueGU3AIg.PNG.nv_placemy%2F6%25BF%25F9_%25BA%25ED%25B7%25CE%25B1%25D7%25B0%25F8%25C1%25F6_00.png&type=f296_164_expire24',
      },
      {
        id: 6,
        img: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA1MzFfMTQy%2FMDAxNjg1NTI5MjQ3MDE4.Ja5gF8sA_-s_yfvW3o6yAKVOAd8gaiuNT11GGrq-T6Ig.Vs451sL68L-F1kd2ARigGxuCdz8bzQBKzEmVueGU3AIg.PNG.nv_placemy%2F6%25BF%25F9_%25BA%25ED%25B7%25CE%25B1%25D7%25B0%25F8%25C1%25F6_00.png&type=f296_164_expire24',
      },
      {
        id: 7,
        img: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA1MzFfMTQy%2FMDAxNjg1NTI5MjQ3MDE4.Ja5gF8sA_-s_yfvW3o6yAKVOAd8gaiuNT11GGrq-T6Ig.Vs451sL68L-F1kd2ARigGxuCdz8bzQBKzEmVueGU3AIg.PNG.nv_placemy%2F6%25BF%25F9_%25BA%25ED%25B7%25CE%25B1%25D7%25B0%25F8%25C1%25F6_00.png&type=f296_164_expire24',
      },
      {
        id: 8,
        img: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA1MzFfMTQy%2FMDAxNjg1NTI5MjQ3MDE4.Ja5gF8sA_-s_yfvW3o6yAKVOAd8gaiuNT11GGrq-T6Ig.Vs451sL68L-F1kd2ARigGxuCdz8bzQBKzEmVueGU3AIg.PNG.nv_placemy%2F6%25BF%25F9_%25BA%25ED%25B7%25CE%25B1%25D7%25B0%25F8%25C1%25F6_00.png&type=f296_164_expire24',
      },
      {
        id: 9,
        img: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA1MzFfMTQy%2FMDAxNjg1NTI5MjQ3MDE4.Ja5gF8sA_-s_yfvW3o6yAKVOAd8gaiuNT11GGrq-T6Ig.Vs451sL68L-F1kd2ARigGxuCdz8bzQBKzEmVueGU3AIg.PNG.nv_placemy%2F6%25BF%25F9_%25BA%25ED%25B7%25CE%25B1%25D7%25B0%25F8%25C1%25F6_00.png&type=f296_164_expire24',
      },
      {
        id: 10,
        img: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA1MzFfMTQy%2FMDAxNjg1NTI5MjQ3MDE4.Ja5gF8sA_-s_yfvW3o6yAKVOAd8gaiuNT11GGrq-T6Ig.Vs451sL68L-F1kd2ARigGxuCdz8bzQBKzEmVueGU3AIg.PNG.nv_placemy%2F6%25BF%25F9_%25BA%25ED%25B7%25CE%25B1%25D7%25B0%25F8%25C1%25F6_00.png&type=f296_164_expire24',
      },
    ],
  });

  const categoryClass = (post: Post) => ('title' in post
    ? 'flex flex-col gap-y-2 mt-2 max-h-[calc(100vh-20rem)] overflow-auto'
    : 'grid grid-cols-3 mt-2 gap-2 text-white text-sm text-center font-bold leading-6 h-[calc(100vh-20rem)] rounded-lg overflow-auto');

  return (
    <div className="w-full px-2 py-8 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) => classNames(
                'w-full rounded-lg py-2.5 text-sm font-medium leading-5 transition-colors duration-150',
                'focus:outline-none ',
                selected ? 'bg-white shadow' : 'hover:bg-white/[0.6] hover:text-black/[0.8]',
              )}
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels>
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                'rounded-xl',
                'focus:outline-none',
              )}
            >
              <ul className={categoryClass(posts[0])}>
                {posts.map((post) => ('img' in post ? (
                  <li key={post.id} className="cursor-pointer relative rounded-md">
                    <img src={post.img} alt="" className="w-full h-full object-cover rounded-lg" />
                  </li>
                ) : (
                  <li key={post.id} className="relative rounded-md p-3 bg-primary-clear/[0.3]">
                    <h3 className="text-sm font-medium leading-5">
                      {post.title}
                      <span className="ml-1">
                        (
                        {post.reviewCount.toLocaleString()}
                        )
                      </span>
                    </h3>
                  </li>
                )))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
