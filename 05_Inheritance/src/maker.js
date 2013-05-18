// 5.2 Object Specifiers
// まったく意味のない関数

function maker(options){
	return {
		first : options.first,
		last : options.last,
		middle : options.middle,
		state : options.state,
		city : options.city
	};
}