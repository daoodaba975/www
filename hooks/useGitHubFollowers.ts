import { useState, useEffect } from "react";

const useGitHubFollowers = (username: string, token: string) => {
  const [followersCount, setFollowersCount] = useState<number | null>(null);

  useEffect(() => {
    const fetchFollowers = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}`,
          {
            headers: {
              Authorization: `token ${token}`,
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          setFollowersCount(data.followers);
        } else {
          console.error(`Failed to fetch followers: ${response.statusText}`);
        }
      } catch (error) {
        console.error("Error fetching followers:", error);
      }
    };

    fetchFollowers();
  }, [username, token]);

  return followersCount;
};

export default useGitHubFollowers;
