const launchResolver = {
	Query: {
		launches: async (_: any, __: any, { dataSources }: any) =>
        dataSources.launchAPI.getAllLaunches()
    },
    Mission: {
        // make sure the default size is 'large' in case user doesn't specify
        missionPatch: (mission: any, { size } = { size: 'LARGE' }) => {
          return size === 'SMALL'
            ? mission.missionPatchSmall
            : mission.missionPatchLarge;
        },
      }
};

export { launchResolver };