


const scriptsInEvents = {

		async EventSheet2_Event1_Act4(runtime, localVars)
		{
			
		},

		async EventSheet2_Event24_Act2(runtime, localVars)
		{
			get_Doc_ID(runtime.globalVars.email);
			
		},

		async EventSheet2_Event26_Act2(runtime, localVars)
		{
			update(runtime.globalVars.score*-1);
		},

		async EventSheet2_Event28_Act3(runtime, localVars)
		{
			set_data1(runtime.globalVars.score*-1,runtime.globalVars.email);
		},

		async Leaderboard_Event10_Act2(runtime, localVars)
		{
			get_data();
		},

		async Leaderboard_Event10_Act7(runtime, localVars)
		{
			runtime.globalVars.temp=get_doc_data();
			
		}

};

self.C3.ScriptsInEvents = scriptsInEvents;

