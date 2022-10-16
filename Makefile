target:
	tsc mission/$(MISSION)/$(MISSION).ts
	node mission/$(MISSION)/$(MISSION).js
	rm -f mission/$(MISSION)/$(MISSION).js