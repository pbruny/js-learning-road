class GitHub {
    constructor() {
        this.client_id = 'fa153f12741fb5accd69';
        this.client_secret = 'de119f7bd984cc921ca0aac0032ba7c394e0330e';
        this.repos_count = 4;
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await reposResponse.json();
        
        return {
            profile, 
            repos
        }
    }
}