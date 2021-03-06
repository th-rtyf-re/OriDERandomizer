/* start module: web_seed_generator */
$pyjs.loaded_modules['web_seed_generator'] = function (__mod_name__) {
	if($pyjs.loaded_modules['web_seed_generator'].__was_initialized__) return $pyjs.loaded_modules['web_seed_generator'];
	var $m = $pyjs.loaded_modules["web_seed_generator"];
	$m.__repr__ = function() { return "<module: web_seed_generator>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'web_seed_generator';
	$m.__name__ = __mod_name__;


	$m['re'] = $p['___import___']('re', null);
	$m['math'] = $p['___import___']('math', null);
	$m['time'] = $p['___import___']('time', null);
	$m['Random'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'web_seed_generator';
		$method = $pyjs__bind_method2('seed', function(seed) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				seed = arguments[1];
			}
			var $mul4,$iter1_nextval,$iter1_type,i,$iter1_iter,$add2,$iter1_array,$add1,$sub3,$sub2,$sub1,$sub4,$mul3,$mul2,$mul1,$iter1_idx;
			self.index = 624;
			self.mt = (typeof ($mul1=$p['list']([0]))==typeof ($mul2=624) && typeof $mul1=='number'?
				$mul1*$mul2:
				$p['op_mul']($mul1,$mul2));
			$p['getattr'](self, 'mt').__setitem__(0, (typeof seed_hash == "undefined"?$m.seed_hash:seed_hash)(seed));
			$iter1_iter = $p['range'](1, 624);
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval).$nextval) != 'undefined') {
				i = $iter1_nextval.$nextval;
				$p['getattr'](self, 'mt').__setitem__(i, $p['float_int']((4294967295)&($p['__op_add']($add1=(typeof ($mul3=1812433253)==typeof ($mul4=($p['getattr'](self, 'mt').__getitem__($p['__op_sub']($sub1=i,$sub2=1)))^(($p['getattr'](self, 'mt').__getitem__($p['__op_sub']($sub3=i,$sub4=1)))>>(30))) && typeof $mul3=='number'?
					$mul3*$mul4:
					$p['op_mul']($mul3,$mul4)),$add2=i))));
			}
			return null;
		}
	, 1, [null,null,['self'],['seed']]);
		$cls_definition['seed'] = $method;
		$method = $pyjs__bind_method2('generate_sequence', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter2_nextval,$iter2_type,$mod3,$iter2_iter,$mod4,i,$add5,$mod5,$add3,$iter2_idx,$mod6,$mod1,$add7,$add4,$mod2,y,$add6,$add8,$iter2_array;
			$iter2_iter = $p['range'](624);
			$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
			while (typeof($p['__wrapped_next']($iter2_nextval).$nextval) != 'undefined') {
				i = $iter2_nextval.$nextval;
				y = $p['float_int']((4294967295)&($p['__op_add']($add5=($p['getattr'](self, 'mt').__getitem__(i))&(2147483648),$add6=($p['getattr'](self, 'mt').__getitem__((typeof ($mod1=$p['__op_add']($add3=i,$add4=1))==typeof ($mod2=624) && typeof $mod1=='number'?
					(($mod1=$mod1%$mod2)<0&&$mod2>0?$mod1+$mod2:$mod1):
					$p['op_mod']($mod1,$mod2))))&(2147483647))));
				$p['getattr'](self, 'mt').__setitem__(i, ($p['getattr'](self, 'mt').__getitem__((typeof ($mod3=$p['__op_add']($add7=i,$add8=397))==typeof ($mod4=624) && typeof $mod3=='number'?
					(($mod3=$mod3%$mod4)<0&&$mod4>0?$mod3+$mod4:$mod3):
					$p['op_mod']($mod3,$mod4))))^((y)>>(1)));
				if ($p['bool'](!$p['op_eq']((typeof ($mod5=y)==typeof ($mod6=2) && typeof $mod5=='number'?
					(($mod5=$mod5%$mod6)<0&&$mod6>0?$mod5+$mod6:$mod5):
					$p['op_mod']($mod5,$mod6)), 0))) {
					$p['getattr'](self, 'mt').__setitem__(i, ($p['getattr'](self, 'mt').__getitem__(i))^(2567483615));
				}
			}
			self.index = 0;
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['generate_sequence'] = $method;
		$method = $pyjs__bind_method2('random', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $div1,$div2,$add10,y,$add9;
			if ($p['bool'](((($p['cmp']($p['getattr'](self, 'index'), 624))|1) == 1))) {
				self['generate_sequence']();
			}
			y = $p['getattr'](self, 'mt').__getitem__($p['getattr'](self, 'index'));
			y = (y)^((y)>>(11));
			y = (y)^(((y)<<(7))&(2636928640));
			y = (y)^(((y)<<(15))&(4022730752));
			y = (y)^((y)>>(18));
			self.index = $p['__op_add']($add9=$p['getattr'](self, 'index'),$add10=1);
			return (typeof ($div1=$p['float_int']((2147483647)&(y)))==typeof ($div2=$p['float'](2147483648)) && typeof $div1=='number' && $div2 !== 0?
				$div1/$div2:
				$p['op_div']($div1,$div2));
		}
	, 1, [null,null,['self']]);
		$cls_definition['random'] = $method;
		$method = $pyjs__bind_method2('randrange', function(length) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				length = arguments[1];
			}
			var $mul6,$mul5;
			return $p['float_int']((typeof ($mul5=self['random']())==typeof ($mul6=length) && typeof $mul5=='number'?
				$mul5*$mul6:
				$p['op_mul']($mul5,$mul6)));
		}
	, 1, [null,null,['self'],['length']]);
		$cls_definition['randrange'] = $method;
		$method = $pyjs__bind_method2('randint', function(low, high) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				low = arguments[1];
				high = arguments[2];
			}
			var $add14,$add13,$add11,$add12,$mul8,$mul7,$sub6,$sub5;
			return $p['float_int']($p['__op_add']($add13=low,$add14=(typeof ($mul7=self['random']())==typeof ($mul8=$p['__op_add']($add11=$p['__op_sub']($sub5=high,$sub6=low),$add12=1)) && typeof $mul7=='number'?
				$mul7*$mul8:
				$p['op_mul']($mul7,$mul8))));
		}
	, 1, [null,null,['self'],['low'],['high']]);
		$cls_definition['randint'] = $method;
		$method = $pyjs__bind_method2('uniform', function(low, high) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				low = arguments[1];
				high = arguments[2];
			}
			var $mul10,$add15,$add16,$sub8,$mul9,$sub7;
			return $p['__op_add']($add15=(typeof ($mul9=self['random']())==typeof ($mul10=$p['__op_sub']($sub7=high,$sub8=low)) && typeof $mul9=='number'?
				$mul9*$mul10:
				$p['op_mul']($mul9,$mul10)),$add16=low);
		}
	, 1, [null,null,['self'],['low'],['high']]);
		$cls_definition['uniform'] = $method;
		$method = $pyjs__bind_method2('shuffle', function(items) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				items = arguments[1];
			}
			var $iter3_idx,i,$iter3_array,original,$iter3_iter,$iter3_type,$iter3_nextval;
			original = $p['list'](items);
			$iter3_iter = $p['range']($p['len'](items));
			$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
			while (typeof($p['__wrapped_next']($iter3_nextval).$nextval) != 'undefined') {
				i = $iter3_nextval.$nextval;
				items.__setitem__(i, original['pop'](self['randrange']($p['len'](original))));
			}
			return null;
		}
	, 1, [null,null,['self'],['items']]);
		$cls_definition['shuffle'] = $method;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Random', $p['tuple']($bases), $data);
	})();
	$m['Area'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'web_seed_generator';
		$method = $pyjs__bind_method2('__init__', function(name) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				name = arguments[1];
			}

			self.$$name = name;
			self.connections = $p['list']([]);
			self.locations = $p['list']([]);
			self.difficulty = 1;
			return null;
		}
	, 1, [null,null,['self'],['name']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('add_connection', function(connection) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				connection = arguments[1];
			}

			self['connections']['append'](connection);
			return null;
		}
	, 1, [null,null,['self'],['connection']]);
		$cls_definition['add_connection'] = $method;
		$method = $pyjs__bind_method2('get_connections', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'connections');
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_connections'] = $method;
		$method = $pyjs__bind_method2('remove_connection', function(connection) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				connection = arguments[1];
			}

			self['connections']['remove'](connection);
			return null;
		}
	, 1, [null,null,['self'],['connection']]);
		$cls_definition['remove_connection'] = $method;
		$method = $pyjs__bind_method2('add_location', function(location) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				location = arguments[1];
			}

			self['locations']['append'](location);
			return null;
		}
	, 1, [null,null,['self'],['location']]);
		$cls_definition['add_location'] = $method;
		$method = $pyjs__bind_method2('get_locations', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'locations');
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_locations'] = $method;
		$method = $pyjs__bind_method2('clear_locations', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self.locations = $p['list']([]);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['clear_locations'] = $method;
		$method = $pyjs__bind_method2('remove_location', function(location) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				location = arguments[1];
			}

			self['locations']['remove'](location);
			return null;
		}
	, 1, [null,null,['self'],['location']]);
		$cls_definition['remove_location'] = $method;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Area', $p['tuple']($bases), $data);
	})();
	$m['Connection'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'web_seed_generator';
		$method = $pyjs__bind_method2('__init__', function(home, target) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				home = arguments[1];
				target = arguments[2];
			}

			self.home = home;
			self.target = target;
			self.keys = 0;
			self.mapstone = false;
			self.requirements = $p['list']([]);
			self.difficulties = $p['list']([]);
			return null;
		}
	, 1, [null,null,['self'],['home'],['target']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('add_requirements', function(req, difficulty) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				req = arguments[1];
				difficulty = arguments[2];
			}
			var match;
			if ($p['bool']((typeof shards == "undefined"?$m.shards:shards))) {
				match = $m['re']['match']('.*GinsoKey.*', $p['str'](req));
				if ($p['bool'](match)) {
					req['remove']('GinsoKey');
					req['append']('WaterVeinShard');
					req['append']('WaterVeinShard');
					req['append']('WaterVeinShard');
					req['append']('WaterVeinShard');
					req['append']('WaterVeinShard');
				}
				match = $m['re']['match']('.*ForlornKey.*', $p['str'](req));
				if ($p['bool'](match)) {
					req['remove']('ForlornKey');
					req['append']('GumonSealShard');
					req['append']('GumonSealShard');
					req['append']('GumonSealShard');
					req['append']('GumonSealShard');
					req['append']('GumonSealShard');
				}
				match = $m['re']['match']('.*HoruKey.*', $p['str'](req));
				if ($p['bool'](match)) {
					req['remove']('HoruKey');
					req['append']('SunstoneShard');
					req['append']('SunstoneShard');
					req['append']('SunstoneShard');
					req['append']('SunstoneShard');
					req['append']('SunstoneShard');
				}
			}
			self['requirements']['append'](req);
			self['difficulties']['append'](difficulty);
			match = $m['re']['match']('.*KS.*KS.*KS.*KS.*', $p['str'](req));
			if ($p['bool'](match)) {
				self.keys = 4;
				return null;
			}
			match = $m['re']['match']('.*KS.*KS.*', $p['str'](req));
			if ($p['bool'](match)) {
				self.keys = 2;
				return null;
			}
			match = $m['re']['match']('.*MS.*', $p['str'](req));
			if ($p['bool'](match)) {
				self.mapstone = true;
				return null;
			}
			return null;
		}
	, 1, [null,null,['self'],['req'],['difficulty']]);
		$cls_definition['add_requirements'] = $method;
		$method = $pyjs__bind_method2('get_requirements', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'requirements');
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_requirements'] = $method;
		$method = $pyjs__bind_method2('cost', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter5_nextval,minReqScore,$iter4_type,$iter5_idx,energy,$iter5_iter,abil,$iter5_type,$iter4_iter,minDiff,$add23,$add21,$add20,$add22,$add25,$add24,$add26,score,health,$iter5_array,$add17,$add18,$add19,i,$iter4_nextval,$iter4_idx,$iter4_array,minReq;
			minReqScore = 7777;
			minDiff = 7777;
			minReq = $p['list']([]);
			$iter4_iter = $p['range'](0, $p['len']($p['getattr'](self, 'requirements')));
			$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
			while (typeof($p['__wrapped_next']($iter4_nextval).$nextval) != 'undefined') {
				i = $iter4_nextval.$nextval;
				score = 0;
				energy = 0;
				health = 0;
				$iter5_iter = $p['getattr'](self, 'requirements').__getitem__(i);
				$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
				while (typeof($p['__wrapped_next']($iter5_nextval).$nextval) != 'undefined') {
					abil = $iter5_nextval.$nextval;
					if ($p['bool']($p['op_eq'](abil, 'EC'))) {
						energy = $p['__op_add']($add17=energy,$add18=1);
						if ($p['bool'](($p['cmp']((typeof inventory == "undefined"?$m.inventory:inventory).__getitem__('EC'), energy) == -1))) {
							score = $p['__op_add']($add19=score,$add20=(typeof costs == "undefined"?$m.costs:costs).__getitem__(abil['strip']()));
						}
					}
					else if ($p['bool']($p['op_eq'](abil, 'HC'))) {
						health = $p['__op_add']($add21=health,$add22=1);
						if ($p['bool'](($p['cmp']((typeof inventory == "undefined"?$m.inventory:inventory).__getitem__('HC'), health) == -1))) {
							score = $p['__op_add']($add23=score,$add24=(typeof costs == "undefined"?$m.costs:costs).__getitem__(abil['strip']()));
						}
					}
					else {
						score = $p['__op_add']($add25=score,$add26=(typeof costs == "undefined"?$m.costs:costs).__getitem__(abil['strip']()));
					}
				}
				if ($p['bool'](($p['cmp'](score, minReqScore) == -1))) {
					minReqScore = score;
					minReq = $p['getattr'](self, 'requirements').__getitem__(i);
					minDiff = $p['getattr'](self, 'difficulties').__getitem__(i);
				}
			}
			return $p['tuple']([minReqScore, minReq, minDiff]);
		}
	, 1, [null,null,['self']]);
		$cls_definition['cost'] = $method;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Connection', $p['tuple']($bases), $data);
	})();
	$m['Location'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'web_seed_generator';
		$cls_definition['factor'] = 4.0;
		$method = $pyjs__bind_method2('__init__', function(x, y, area, orig, difficulty, zone) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				x = arguments[1];
				y = arguments[2];
				area = arguments[3];
				orig = arguments[4];
				difficulty = arguments[5];
				zone = arguments[6];
			}
			var $mul12,$mul13,$mul11,$mul14,$div3,$div5,$div6,$div4;
			self.x = $p['float_int']((typeof ($mul11=$m['math']['floor']((typeof ($div3=x)==typeof ($div4=$p['getattr'](self, 'factor')) && typeof $div3=='number' && $div4 !== 0?
				$div3/$div4:
				$p['op_div']($div3,$div4))))==typeof ($mul12=$p['getattr'](self, 'factor')) && typeof $mul11=='number'?
				$mul11*$mul12:
				$p['op_mul']($mul11,$mul12)));
			self.y = $p['float_int']((typeof ($mul13=$m['math']['floor']((typeof ($div5=y)==typeof ($div6=$p['getattr'](self, 'factor')) && typeof $div5=='number' && $div6 !== 0?
				$div5/$div6:
				$p['op_div']($div5,$div6))))==typeof ($mul14=$p['getattr'](self, 'factor')) && typeof $mul13=='number'?
				$mul13*$mul14:
				$p['op_mul']($mul13,$mul14)));
			self.orig = orig;
			self.area = area;
			self.difficulty = difficulty;
			self.zone = zone;
			return null;
		}
	, 1, [null,null,['self'],['x'],['y'],['area'],['orig'],['difficulty'],['zone']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('get_key', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $mul16,$mul15,$add27,$add28;
			return $p['__op_add']($add27=(typeof ($mul15=$p['getattr'](self, 'x'))==typeof ($mul16=10000) && typeof $mul15=='number'?
				$mul15*$mul16:
				$p['op_mul']($mul15,$mul16)),$add28=$p['getattr'](self, 'y'));
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_key'] = $method;
		$method = $pyjs__bind_method2('to_string', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add29,$add38,$add39,$add32,$add33,$add31,$add36,$add37,$add34,$add35,$add41,$add42,$add40,$add30;
			return $p['__op_add']($add41=$p['__op_add']($add39=$p['__op_add']($add37=$p['__op_add']($add35=$p['__op_add']($add33=$p['__op_add']($add31=$p['__op_add']($add29=$p['getattr'](self, 'area'),$add30=' '),$add32=$p['getattr'](self, 'orig')),$add34=' ('),$add36=$p['str']($p['getattr'](self, 'x'))),$add38=' '),$add40=$p['str']($p['getattr'](self, 'y'))),$add42=')');
		}
	, 1, [null,null,['self']]);
		$cls_definition['to_string'] = $method;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Location', $p['tuple']($bases), $data);
	})();
	$m['Door'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'web_seed_generator';
		$cls_definition['factor'] = 4.0;
		$method = $pyjs__bind_method2('__init__', function(name, x, y) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				name = arguments[1];
				x = arguments[2];
				y = arguments[3];
			}

			self.x = x;
			self.y = y;
			self.$$name = name;
			return null;
		}
	, 1, [null,null,['self'],['name'],['x'],['y']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('get_key', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $mul17,$add43,$add44,$div10,$mul19,$mul18,$div8,$div9,$mul22,$div7,$mul20,$mul21;
			return $p['__op_add']($add43=(typeof ($mul19=$p['float_int']((typeof ($mul17=$m['math']['floor']((typeof ($div7=$p['getattr'](self, 'x'))==typeof ($div8=$p['getattr'](self, 'factor')) && typeof $div7=='number' && $div8 !== 0?
				$div7/$div8:
				$p['op_div']($div7,$div8))))==typeof ($mul18=$p['getattr'](self, 'factor')) && typeof $mul17=='number'?
				$mul17*$mul18:
				$p['op_mul']($mul17,$mul18))))==typeof ($mul20=10000) && typeof $mul19=='number'?
				$mul19*$mul20:
				$p['op_mul']($mul19,$mul20)),$add44=$p['float_int']((typeof ($mul21=$m['math']['floor']((typeof ($div9=$p['getattr'](self, 'y'))==typeof ($div10=$p['getattr'](self, 'factor')) && typeof $div9=='number' && $div10 !== 0?
				$div9/$div10:
				$p['op_div']($div9,$div10))))==typeof ($mul22=$p['getattr'](self, 'factor')) && typeof $mul21=='number'?
				$mul21*$mul22:
				$p['op_mul']($mul21,$mul22))));
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_key'] = $method;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Door', $p['tuple']($bases), $data);
	})();
	$m['reach_area'] = function(target) {
		var $add50,$add51,$add52,$add49,$iter6_idx,$add48,$iter6_type,$and1,$and2,sharedItem,$add47,$iter6_array,$add46,$iter6_iter,$add45,$iter6_nextval;
		if ($p['bool'](($p['bool']($and1=(typeof sharedMap == "undefined"?$m.sharedMap:sharedMap).__contains__(target))?($p['cmp']((typeof playerID == "undefined"?$m.playerID:playerID), 1) == 1):$and1))) {
			$iter6_iter = (typeof sharedMap == "undefined"?$m.sharedMap:sharedMap).__getitem__(target);
			$iter6_nextval=$p['__iter_prepare']($iter6_iter,false);
			while (typeof($p['__wrapped_next']($iter6_nextval).$nextval) != 'undefined') {
				sharedItem = $iter6_nextval.$nextval;
				if ($p['bool']($p['op_eq'](sharedItem.__getitem__(1), (typeof playerID == "undefined"?$m.playerID:playerID)))) {
					$m.assignQueue['append'](sharedItem.__getitem__(0));
					$m['itemCount'] = $p['__op_add']($add45=$m['itemCount'],$add46=1);
				}
				else {
					(typeof assign == "undefined"?$m.assign:assign)(sharedItem.__getitem__(0));
					if ($p['bool'](!(typeof spoilerGroup == "undefined"?$m.spoilerGroup:spoilerGroup).__contains__(sharedItem.__getitem__(0)))) {
						(typeof spoilerGroup == "undefined"?$m.spoilerGroup:spoilerGroup).__setitem__(sharedItem.__getitem__(0), $p['list']([]));
					}
					(typeof spoilerGroup == "undefined"?$m.spoilerGroup:spoilerGroup).__getitem__(sharedItem.__getitem__(0))['append']($p['__op_add']($add51=$p['__op_add']($add49=$p['__op_add']($add47=sharedItem.__getitem__(0),$add48=' from Player '),$add50=$p['str'](sharedItem.__getitem__(1))),$add52='\n'));
				}
			}
		}
		$m.currentAreas['append'](target);
		(typeof areasReached == "undefined"?$m.areasReached:areasReached).__setitem__(target, true);
		return null;
	};
	$m['reach_area'].__name__ = 'reach_area';

	$m['reach_area'].__bind_type__ = 0;
	$m['reach_area'].__args__ = [null,null,['target']];
	$m['open_free_connections'] = function() {
		var $iter9_iter,$iter8_iter,cost,$or1,area,$iter9_nextval,$iter9_idx,visitMap,mapstoneCount,keystoneCount,$mul24,$iter7_type,$iter9_type,map,$iter8_idx,$or2,$iter7_iter,$iter8_type,$iter8_nextval,$iter7_idx,$add53,$add54,$add55,$iter7_nextval,$add57,$add58,$iter7_array,$iter8_array,$mul23,$add56,connection,found,$iter9_array;
		found = false;
		keystoneCount = 0;
		mapstoneCount = 0;
		$iter7_iter = $m.areaList;
		$iter7_nextval=$p['__iter_prepare']($iter7_iter,false);
		while (typeof($p['__wrapped_next']($iter7_nextval).$nextval) != 'undefined') {
			area = $iter7_nextval.$nextval;
			if ($p['bool']($m.areasReached['keys']().__contains__(area))) {
				$iter8_iter = (typeof areas == "undefined"?$m.areas:areas).__getitem__(area)['get_connections']();
				$iter8_nextval=$p['__iter_prepare']($iter8_iter,false);
				while (typeof($p['__wrapped_next']($iter8_nextval).$nextval) != 'undefined') {
					connection = $iter8_nextval.$nextval;
					cost = connection['cost']();
					if ($p['bool'](($p['cmp'](cost.__getitem__(0), 0) < 1))) {
						(typeof areas == "undefined"?$m.areas:areas).__getitem__($p['getattr'](connection, 'target')).difficulty = cost.__getitem__(2);
						if ($p['bool'](($p['cmp']($p['getattr'](connection, 'keys'), 0) == 1))) {
							if ($p['bool'](!$m.doorQueue['keys']().__contains__(area))) {
								(typeof doorQueue == "undefined"?$m.doorQueue:doorQueue).__setitem__(area, connection);
								keystoneCount = $p['__op_add']($add53=keystoneCount,$add54=$p['getattr'](connection, 'keys'));
							}
						}
						else if ($p['bool']($p['getattr'](connection, 'mapstone'))) {
							if ($p['bool'](!(typeof areasReached == "undefined"?$m.areasReached:areasReached).__contains__($p['getattr'](connection, 'target')))) {
								visitMap = true;
								$iter9_iter = $m.mapQueue['keys']();
								$iter9_nextval=$p['__iter_prepare']($iter9_iter,false);
								while (typeof($p['__wrapped_next']($iter9_nextval).$nextval) != 'undefined') {
									map = $iter9_nextval.$nextval;
									if ($p['bool'](($p['bool']($or1=$p['op_eq'](map, area))?$or1:$p['op_eq']($p['getattr']((typeof mapQueue == "undefined"?$m.mapQueue:mapQueue).__getitem__(map), 'target'), $p['getattr'](connection, 'target'))))) {
										visitMap = false;
									}
								}
								if ($p['bool'](visitMap)) {
									(typeof mapQueue == "undefined"?$m.mapQueue:mapQueue).__setitem__(area, connection);
									mapstoneCount = $p['__op_add']($add55=mapstoneCount,$add56=1);
								}
							}
						}
						else {
							if ($p['bool'](!(typeof areasReached == "undefined"?$m.areasReached:areasReached).__contains__($p['getattr'](connection, 'target')))) {
								$m['seedDifficulty'] = $p['__op_add']($add57=$m['seedDifficulty'],$add58=(typeof ($mul23=cost.__getitem__(2))==typeof ($mul24=cost.__getitem__(2)) && typeof $mul23=='number'?
									$mul23*$mul24:
									$p['op_mul']($mul23,$mul24)));
								$m['reach_area']($p['getattr'](connection, 'target'));
							}
							$m.connectionQueue['append']($p['tuple']([area, connection]));
							found = true;
						}
					}
				}
			}
		}
		return $p['tuple']([found, keystoneCount, mapstoneCount]);
	};
	$m['open_free_connections'].__name__ = 'open_free_connections';

	$m['open_free_connections'].__bind_type__ = 0;
	$m['open_free_connections'].__args__ = [null,null];
	$m['get_all_accessible_locations'] = function() {
		var $iter10_nextval,locations,currentLocations,$iter10_iter,loc,$add60,area,$iter10_idx,location,$iter11_idx,$iter11_iter,$and3,$iter12_array,$iter11_array,$iter11_nextval,$add59,$iter12_type,$iter11_type,$and4,$iter10_array,$iter12_iter,$iter10_type,$iter12_idx,$iter12_nextval;
		locations = $p['list']([]);
		$iter10_iter = $m.areaList;
		$iter10_nextval=$p['__iter_prepare']($iter10_iter,false);
		while (typeof($p['__wrapped_next']($iter10_nextval).$nextval) != 'undefined') {
			area = $iter10_nextval.$nextval;
			if ($p['bool']($m.areasReached['keys']().__contains__(area))) {
				currentLocations = (typeof areas == "undefined"?$m.areas:areas).__getitem__(area)['get_locations']();
				$iter11_iter = currentLocations;
				$iter11_nextval=$p['__iter_prepare']($iter11_iter,false);
				while (typeof($p['__wrapped_next']($iter11_nextval).$nextval) != 'undefined') {
					location = $iter11_nextval.$nextval;
					location.difficulty = $p['__op_add']($add59=$p['getattr'](location, 'difficulty'),$add60=$p['getattr']((typeof areas == "undefined"?$m.areas:areas).__getitem__(area), 'difficulty'));
				}
				if ($p['bool']((typeof limitkeys == "undefined"?$m.limitkeys:limitkeys))) {
					loc = '';
					$iter12_iter = currentLocations;
					$iter12_nextval=$p['__iter_prepare']($iter12_iter,false);
					while (typeof($p['__wrapped_next']($iter12_nextval).$nextval) != 'undefined') {
						location = $iter12_nextval.$nextval;
						if ($p['bool']($m.keySpots['keys']().__contains__($p['getattr'](location, 'orig')))) {
							loc = location;
							break;
						}
					}
					if ($p['bool'](loc)) {
						(typeof force_assign == "undefined"?$m.force_assign:force_assign)((typeof keySpots == "undefined"?$m.keySpots:keySpots).__getitem__($p['getattr'](loc, 'orig')), loc);
						currentLocations['remove'](loc);
					}
				}
				locations['extend'](currentLocations);
				(typeof areas == "undefined"?$m.areas:areas).__getitem__(area)['clear_locations']();
			}
		}
		if ($p['bool']((typeof reservedLocations == "undefined"?$m.reservedLocations:reservedLocations))) {
			locations['append']($m.reservedLocations['pop'](0));
			locations['append']($m.reservedLocations['pop'](0));
		}
		if ($p['bool'](($p['bool']($and3=($p['cmp']((typeof itemCount == "undefined"?$m.itemCount:itemCount), 2) == 1))?((($p['cmp']($p['len'](locations), 2))|1) == 1):$and3))) {
			$m.reservedLocations['append'](locations['pop']($m.random['randrange']($p['len'](locations))));
			$m.reservedLocations['append'](locations['pop']($m.random['randrange']($p['len'](locations))));
		}
		return locations;
	};
	$m['get_all_accessible_locations'].__name__ = 'get_all_accessible_locations';

	$m['get_all_accessible_locations'].__bind_type__ = 0;
	$m['get_all_accessible_locations'].__args__ = [null,null];
	$m['prepare_path'] = function(free_space) {
		var $add88,$add83,$add82,$add81,$add80,$add87,$add86,$add85,$add84,$iter17_type,$iter20_array,$add70,$mul26,$mul25,$iter13_array,$iter17_nextval,$iter20_iter,$iter14_array,$add65,$and5,$and6,$and7,$iter13_nextval,$add76,$add77,$add74,$add75,$add72,$add73,$iter18_array,$add71,$add78,$iter15_idx,$iter20_idx,energy,$iter16_idx,cost,abilities_to_open,req_set,$add79,totalCost,$add64,$add67,$add66,$add61,$iter15_iter,$add63,$add62,req,$add69,$add68,$iter19_nextval,health,$iter16_nextval,$iter14_type,$iter19_array,sunstoneShard,path,$iter19_idx,$iter13_iter,connection,$iter19_type,$iter13_idx,area,$div14,$div11,$div12,$div13,$iter19_iter,$iter13_type,$iter18_type,$iter20_type,$iter14_idx,$iter14_nextval,target,$iter15_type,$iter17_idx,$iter20_nextval,waterVeinShard,$iter16_iter,$iter17_iter,requirements,$iter16_type,$iter18_idx,$iter18_nextval,$or5,$or4,$iter18_iter,$or3,$iter15_array,gumonSealShard,$iter17_array,$iter14_iter,$iter16_array,$iter15_nextval,position;
		abilities_to_open = $p['dict']([]);
		totalCost = 0.0;
		free_space = $p['__op_add']($add61=free_space,$add62=$p['len']((typeof balanceList == "undefined"?$m.balanceList:balanceList)));
		$iter13_iter = $m.areaList;
		$iter13_nextval=$p['__iter_prepare']($iter13_iter,false);
		while (typeof($p['__wrapped_next']($iter13_nextval).$nextval) != 'undefined') {
			area = $iter13_nextval.$nextval;
			if ($p['bool']($m.areasReached['keys']().__contains__(area))) {
				$iter14_iter = (typeof areas == "undefined"?$m.areas:areas).__getitem__(area)['get_connections']();
				$iter14_nextval=$p['__iter_prepare']($iter14_iter,false);
				while (typeof($p['__wrapped_next']($iter14_nextval).$nextval) != 'undefined') {
					connection = $iter14_nextval.$nextval;
					if ($p['bool']((typeof areasReached == "undefined"?$m.areasReached:areasReached).__contains__($p['getattr'](connection, 'target')))) {
						continue;
					}
					if ($p['bool'](($p['bool']($and5=(typeof limitkeys == "undefined"?$m.limitkeys:limitkeys))?($p['bool']($and6=connection['get_requirements']())?($p['bool']($or3=connection['get_requirements']().__getitem__(0).__contains__('GinsoKey'))?$or3:($p['bool']($or4=connection['get_requirements']().__getitem__(0).__contains__('ForlornKey'))?$or4:connection['get_requirements']().__getitem__(0).__contains__('HoruKey'))):$and6):$and5))) {
						continue;
					}
					$iter15_iter = connection['get_requirements']();
					$iter15_nextval=$p['__iter_prepare']($iter15_iter,false);
					while (typeof($p['__wrapped_next']($iter15_nextval).$nextval) != 'undefined') {
						req_set = $iter15_nextval.$nextval;
						requirements = $p['list']([]);
						cost = 0;
						energy = 0;
						health = 0;
						waterVeinShard = 0;
						gumonSealShard = 0;
						sunstoneShard = 0;
						$iter16_iter = req_set;
						$iter16_nextval=$p['__iter_prepare']($iter16_iter,false);
						while (typeof($p['__wrapped_next']($iter16_nextval).$nextval) != 'undefined') {
							req = $iter16_nextval.$nextval;
							if ($p['bool']($p['op_eq']((typeof itemPool == "undefined"?$m.itemPool:itemPool).__getitem__(req), 0))) {
								requirements = $p['list']([]);
								break;
							}
							if ($p['bool'](($p['cmp']((typeof costs == "undefined"?$m.costs:costs).__getitem__(req), 0) == 1))) {
								if ($p['bool']($p['op_eq'](req, 'EC'))) {
									energy = $p['__op_add']($add63=energy,$add64=1);
									if ($p['bool'](($p['cmp'](energy, (typeof inventory == "undefined"?$m.inventory:inventory).__getitem__('EC')) == 1))) {
										requirements['append'](req);
										cost = $p['__op_add']($add65=cost,$add66=(typeof costs == "undefined"?$m.costs:costs).__getitem__(req));
									}
								}
								else if ($p['bool']($p['op_eq'](req, 'HC'))) {
									health = $p['__op_add']($add67=health,$add68=1);
									if ($p['bool'](($p['cmp'](health, (typeof inventory == "undefined"?$m.inventory:inventory).__getitem__('HC')) == 1))) {
										requirements['append'](req);
										cost = $p['__op_add']($add69=cost,$add70=(typeof costs == "undefined"?$m.costs:costs).__getitem__(req));
									}
								}
								else if ($p['bool']($p['op_eq'](req, 'WaterVeinShard'))) {
									waterVeinShard = $p['__op_add']($add71=waterVeinShard,$add72=1);
									if ($p['bool'](($p['cmp'](waterVeinShard, (typeof inventory == "undefined"?$m.inventory:inventory).__getitem__('WaterVeinShard')) == 1))) {
										requirements['append'](req);
										cost = $p['__op_add']($add73=cost,$add74=(typeof costs == "undefined"?$m.costs:costs).__getitem__(req));
									}
								}
								else if ($p['bool']($p['op_eq'](req, 'GumonSealShard'))) {
									gumonSealShard = $p['__op_add']($add75=gumonSealShard,$add76=1);
									if ($p['bool'](($p['cmp'](gumonSealShard, (typeof inventory == "undefined"?$m.inventory:inventory).__getitem__('GumonSealShard')) == 1))) {
										requirements['append'](req);
										cost = $p['__op_add']($add77=cost,$add78=(typeof costs == "undefined"?$m.costs:costs).__getitem__(req));
									}
								}
								else if ($p['bool']($p['op_eq'](req, 'SunstoneShard'))) {
									sunstoneShard = $p['__op_add']($add79=sunstoneShard,$add80=1);
									if ($p['bool'](($p['cmp'](sunstoneShard, (typeof inventory == "undefined"?$m.inventory:inventory).__getitem__('SunstoneShard')) == 1))) {
										requirements['append'](req);
										cost = $p['__op_add']($add81=cost,$add82=(typeof costs == "undefined"?$m.costs:costs).__getitem__(req));
									}
								}
								else {
									requirements['append'](req);
									cost = $p['__op_add']($add83=cost,$add84=(typeof costs == "undefined"?$m.costs:costs).__getitem__(req));
								}
							}
						}
						if ($p['bool'](($p['cmp']($p['len'](requirements), free_space) < 1))) {
							$iter17_iter = requirements;
							$iter17_nextval=$p['__iter_prepare']($iter17_iter,false);
							while (typeof($p['__wrapped_next']($iter17_nextval).$nextval) != 'undefined') {
								req = $iter17_nextval.$nextval;
								if ($p['bool'](!abilities_to_open.__contains__(req))) {
									abilities_to_open.__setitem__(req, $p['tuple']([cost, requirements]));
								}
								else if ($p['bool'](($p['cmp'](abilities_to_open.__getitem__(req).__getitem__(0), cost) == 1))) {
									abilities_to_open.__setitem__(req, $p['tuple']([cost, requirements]));
								}
							}
						}
					}
				}
			}
		}
		$iter18_iter = abilities_to_open;
		$iter18_nextval=$p['__iter_prepare']($iter18_iter,false);
		while (typeof($p['__wrapped_next']($iter18_nextval).$nextval) != 'undefined') {
			path = $iter18_nextval.$nextval;
			totalCost = $p['__op_add']($add85=totalCost,$add86=(typeof ($div11=1.0)==typeof ($div12=abilities_to_open.__getitem__(path).__getitem__(0)) && typeof $div11=='number' && $div12 !== 0?
				$div11/$div12:
				$p['op_div']($div11,$div12)));
		}
		position = 0;
		target = (typeof ($mul25=$m.random['random']())==typeof ($mul26=totalCost) && typeof $mul25=='number'?
			$mul25*$mul26:
			$p['op_mul']($mul25,$mul26));
		$iter19_iter = $m.itemList;
		$iter19_nextval=$p['__iter_prepare']($iter19_iter,false);
		while (typeof($p['__wrapped_next']($iter19_nextval).$nextval) != 'undefined') {
			path = $iter19_nextval.$nextval;
			if ($p['bool'](abilities_to_open['keys']().__contains__(path))) {
				position = $p['__op_add']($add87=position,$add88=(typeof ($div13=1.0)==typeof ($div14=abilities_to_open.__getitem__(path).__getitem__(0)) && typeof $div13=='number' && $div14 !== 0?
					$div13/$div14:
					$p['op_div']($div13,$div14)));
				if ($p['bool'](($p['cmp'](target, position) < 1))) {
					$iter20_iter = abilities_to_open.__getitem__(path).__getitem__(1);
					$iter20_nextval=$p['__iter_prepare']($iter20_iter,false);
					while (typeof($p['__wrapped_next']($iter20_nextval).$nextval) != 'undefined') {
						req = $iter20_nextval.$nextval;
						if ($p['bool'](($p['cmp']((typeof itemPool == "undefined"?$m.itemPool:itemPool).__getitem__(req), 0) == 1))) {
							$m.assignQueue['append'](req);
						}
					}
					return abilities_to_open.__getitem__(path).__getitem__(1);
				}
			}
		}
		return null;
	};
	$m['prepare_path'].__name__ = 'prepare_path';

	$m['prepare_path'].__bind_type__ = 0;
	$m['prepare_path'].__args__ = [null,null,['free_space']];
	$m['get_location_from_balance_list'] = function() {
		var target,$div15,$div16,location,$mul28,$mul27;
		target = $p['float_int']((typeof ($mul27=$p['pow']($m.random['random'](), (typeof ($div15=1.0)==typeof ($div16=(typeof balanceLevel == "undefined"?$m.balanceLevel:balanceLevel)) && typeof $div15=='number' && $div16 !== 0?
			$div15/$div16:
			$p['op_div']($div15,$div16))))==typeof ($mul28=$p['len']((typeof balanceList == "undefined"?$m.balanceList:balanceList))) && typeof $mul27=='number'?
			$mul27*$mul28:
			$p['op_mul']($mul27,$mul28)));
		location = $m.balanceList['pop'](target);
		$m.balanceListLeftovers['append'](location.__getitem__(0));
		return location.__getitem__(1);
	};
	$m['get_location_from_balance_list'].__name__ = 'get_location_from_balance_list';

	$m['get_location_from_balance_list'].__bind_type__ = 0;
	$m['get_location_from_balance_list'].__args__ = [null,null];
	$m['assign_random'] = function(recurseCount) {
		if (typeof recurseCount == 'undefined') recurseCount=arguments.callee.__args__[2][1];
		var $and8,$and9,$iter21_idx,$div17,$div18,key,$iter21_nextval,$add90,$add89,value,$add91,$iter21_type,$iter21_iter,$add92,$iter21_array,position,$and10;
		value = $m.random['random']();
		position = 0.0;
		$iter21_iter = $m.itemList;
		$iter21_nextval=$p['__iter_prepare']($iter21_iter,false);
		while (typeof($p['__wrapped_next']($iter21_nextval).$nextval) != 'undefined') {
			key = $iter21_nextval.$nextval;
			position = $p['__op_add']($add89=position,$add90=(typeof ($div17=(typeof itemPool == "undefined"?$m.itemPool:itemPool).__getitem__(key))==typeof ($div18=(typeof itemCount == "undefined"?$m.itemCount:itemCount)) && typeof $div17=='number' && $div18 !== 0?
				$div17/$div18:
				$p['op_div']($div17,$div18)));
			if ($p['bool'](($p['cmp'](value, position) < 1))) {
				if ($p['bool'](($p['bool']($and8=(typeof starved == "undefined"?$m.starved:starved))?($p['bool']($and9=(typeof skillsOutput == "undefined"?$m.skillsOutput:skillsOutput).__contains__(key))?($p['cmp'](recurseCount, 3) == -1):$and9):$and8))) {
					return $pyjs_kwargs_call(null, $m['assign_random'], null, null, [{recurseCount:$p['__op_add']($add91=recurseCount,$add92=1)}]);
				}
				return (typeof assign == "undefined"?$m.assign:assign)(key);
			}
		}
		return null;
	};
	$m['assign_random'].__name__ = 'assign_random';

	$m['assign_random'].__bind_type__ = 0;
	$m['assign_random'].__args__ = [null,null,['recurseCount', 0]];
	$m['assign'] = function(item) {
		var $or7,$or6,$add94,$sub13,$sub12,$sub11,$sub10,$or9,$or8,$sub14,$sub9,$or11,$or10,$add93;
		(typeof itemPool == "undefined"?$m.itemPool:itemPool).__setitem__(item, $p['max']($p['__op_sub']($sub9=(typeof itemPool == "undefined"?$m.itemPool:itemPool).__getitem__(item),$sub10=1), 0));
		if ($p['bool'](($p['bool']($or6=$p['op_eq'](item, 'EC'))?$or6:($p['bool']($or7=$p['op_eq'](item, 'KS'))?$or7:$p['op_eq'](item, 'HC'))))) {
			if ($p['bool'](($p['cmp']((typeof costs == "undefined"?$m.costs:costs).__getitem__(item), 0) == 1))) {
				(typeof costs == "undefined"?$m.costs:costs).__setitem__(item, $p['__op_sub']($sub11=(typeof costs == "undefined"?$m.costs:costs).__getitem__(item),$sub12=1));
			}
		}
		else if ($p['bool'](($p['bool']($or9=$p['op_eq'](item, 'WaterVeinShard'))?$or9:($p['bool']($or10=$p['op_eq'](item, 'GumonSealShard'))?$or10:$p['op_eq'](item, 'SunstoneShard'))))) {
			if ($p['bool'](($p['cmp']((typeof costs == "undefined"?$m.costs:costs).__getitem__(item), 0) == 1))) {
				(typeof costs == "undefined"?$m.costs:costs).__setitem__(item, $p['__op_sub']($sub13=(typeof costs == "undefined"?$m.costs:costs).__getitem__(item),$sub14=1));
			}
		}
		else if ($p['bool']($m.costs['keys']().__contains__(item))) {
			(typeof costs == "undefined"?$m.costs:costs).__setitem__(item, 0);
		}
		(typeof inventory == "undefined"?$m.inventory:inventory).__setitem__(item, $p['__op_add']($add93=(typeof inventory == "undefined"?$m.inventory:inventory).__getitem__(item),$add94=1));
		return item;
	};
	$m['assign'].__name__ = 'assign';

	$m['assign'].__bind_type__ = 0;
	$m['assign'].__args__ = [null,null,['item']];
	$m['force_assign'] = function(item, location) {

		$m['assign'](item);
		(typeof assign_to_location == "undefined"?$m.assign_to_location:assign_to_location)(item, location);
		return null;
	};
	$m['force_assign'].__name__ = 'force_assign';

	$m['force_assign'].__bind_type__ = 0;
	$m['force_assign'].__args__ = [null,null,['item'],['location']];
	$m['assign_to_location'] = function(item, location) {
		var $add118,$add119,$add116,$add117,$add114,$add115,$add112,$add113,$add110,zone,$mul29,assignment,$add163,$add162,$add161,$add160,$add164,$add111,$mul30,$add98,$add99,$add95,$sub18,$sub17,$sub16,$sub15,$add145,$add144,$add147,$add146,$add141,$add140,$add143,$add142,$add149,$add148,$add127,$add126,$add125,$add124,$add123,$add122,$add121,$add120,$add129,$add128,value,$add152,$add153,$add150,$add151,$add156,$add157,$add154,$add155,$add158,$add159,$add134,$add135,$add136,$add137,$add130,$add131,$add132,$add133,$add138,$add139,player,$add101,$add100,$add103,$add102,$add105,$add104,$add107,$add106,$add109,$add108,$add96,$add97,$and12,$and13,$and11,$and16,$and17,$and14,$and15,$and18;
		assignment = '';
		zone = $p['getattr'](location, 'zone');
		value = 0;
		if ($p['bool'](($p['bool']($and11=($p['cmp']($m['playerCount'], 1) == 1))?($p['bool']($and12=$p['op_eq']($m['playerID'], 1))?$m['sharedList'].__contains__(item):$and12):$and11))) {
			player = $m.random['randint'](1, $m['playerCount']);
			if ($p['bool'](!$m['sharedMap'].__contains__($p['getattr'](location, 'area')))) {
				$m['sharedMap'].__setitem__($p['getattr'](location, 'area'), $p['list']([]));
			}
			$m['sharedMap'].__getitem__($p['getattr'](location, 'area'))['append']($p['tuple']([item, player]));
			if ($p['bool']((player !== $m['playerID']))) {
				if ($p['bool'](!$m['sharedMap'].__contains__(player))) {
					$m['sharedMap'].__setitem__(player, 0);
				}
				$m['sharedMap'].__setitem__(player, $p['__op_add']($add95=$m['sharedMap'].__getitem__(player),$add96=1));
				if ($p['bool'](!$m['spoilerGroup'].__contains__(item))) {
					$m['spoilerGroup'].__setitem__(item, $p['list']([]));
				}
				$m['spoilerGroup'].__getitem__(item)['append']($p['__op_add']($add101=$p['__op_add']($add99=$p['__op_add']($add97=item,$add98=' from Player '),$add100=$p['str'](player)),$add102='\n'));
				item = 'EX*';
				$m['expSlots'] = $p['__op_add']($add103=$m['expSlots'],$add104=1);
			}
		}
		if ($p['bool'](($p['bool']($and14=!$p['bool']((typeof nonProgressiveMapstones == "undefined"?$m.nonProgressiveMapstones:nonProgressiveMapstones)))?$p['op_eq']($p['getattr'](location, 'orig'), 'MapStone'):$and14))) {
			$m['mapstonesAssigned'] = $p['__op_add']($add105=$m['mapstonesAssigned'],$add106=1);
			assignment = $p['__op_add']($add111=assignment,$add112=$p['__op_add']($add109=$p['str']($p['__op_add']($add107=20,$add108=(typeof ($mul29=$m['mapstonesAssigned'])==typeof ($mul30=4) && typeof $mul29=='number'?
				$mul29*$mul30:
				$p['op_mul']($mul29,$mul30)))),$add110='|'));
			zone = 'Mapstone';
			if ($p['bool']($m.costs['keys']().__contains__(item))) {
				if ($p['bool'](!$m['spoilerGroup'].__contains__(item))) {
					$m['spoilerGroup'].__setitem__(item, $p['list']([]));
				}
				$m['spoilerGroup'].__getitem__(item)['append']($p['__op_add']($add117=$p['__op_add']($add115=$p['__op_add']($add113=item,$add114=' from MapStone '),$add116=$p['str']($m['mapstonesAssigned'])),$add118='\r\n'));
			}
		}
		else {
			assignment = $p['__op_add']($add121=assignment,$add122=$p['__op_add']($add119=$p['str'](location['get_key']()),$add120='|'));
			if ($p['bool']($m.costs['keys']().__contains__(item))) {
				if ($p['bool'](!$m['spoilerGroup'].__contains__(item))) {
					$m['spoilerGroup'].__setitem__(item, $p['list']([]));
				}
				$m['spoilerGroup'].__getitem__(item)['append']($p['__op_add']($add127=$p['__op_add']($add125=$p['__op_add']($add123=item,$add124=' from '),$add126=location['to_string']()),$add128='\r\n'));
			}
		}
		if ($p['bool']((typeof skillsOutput == "undefined"?$m.skillsOutput:skillsOutput).__contains__(item))) {
			assignment = $p['__op_add']($add133=assignment,$add134=$p['__op_add']($add131=$p['__op_add']($add129=$p['str']($p['__getslice']((typeof skillsOutput == "undefined"?$m.skillsOutput:skillsOutput).__getitem__(item), 0, 2)),$add130='|'),$add132=$p['__getslice']((typeof skillsOutput == "undefined"?$m.skillsOutput:skillsOutput).__getitem__(item), 2, null)));
		}
		else if ($p['bool']((typeof eventsOutput == "undefined"?$m.eventsOutput:eventsOutput).__contains__(item))) {
			assignment = $p['__op_add']($add139=assignment,$add140=$p['__op_add']($add137=$p['__op_add']($add135=$p['str']($p['__getslice']((typeof eventsOutput == "undefined"?$m.eventsOutput:eventsOutput).__getitem__(item), 0, 2)),$add136='|'),$add138=$p['__getslice']((typeof eventsOutput == "undefined"?$m.eventsOutput:eventsOutput).__getitem__(item), 2, null)));
		}
		else if ($p['bool']($p['op_eq'](item, 'EX*'))) {
			value = (typeof get_random_exp_value == "undefined"?$m.get_random_exp_value:get_random_exp_value)($m['expRemaining'], $m['expSlots']);
			$m['expRemaining'] = $p['__op_sub']($sub15=$m['expRemaining'],$sub16=value);
			$m['expSlots'] = $p['__op_sub']($sub17=$m['expSlots'],$sub18=1);
			assignment = $p['__op_add']($add143=assignment,$add144=$p['__op_add']($add141='EX|',$add142=$p['str'](value)));
		}
		else if ($p['bool']($p['__getslice'](item, 2, null))) {
			assignment = $p['__op_add']($add149=assignment,$add150=$p['__op_add']($add147=$p['__op_add']($add145=$p['__getslice'](item, 0, 2),$add146='|'),$add148=$p['__getslice'](item, 2, null)));
		}
		else {
			assignment = $p['__op_add']($add153=assignment,$add154=$p['__op_add']($add151=$p['__getslice'](item, 0, 2),$add152='|1'));
		}
		assignment = $p['__op_add']($add159=assignment,$add160=$p['__op_add']($add157=$p['__op_add']($add155='|',$add156=zone),$add158='\r\n'));
		if ($p['bool']((typeof eventsOutput == "undefined"?$m.eventsOutput:eventsOutput).__contains__(item))) {
			$m['eventList']['append'](assignment);
		}
		else if ($p['bool'](($p['bool']($and16=$m['balanced'])?($p['bool']($and17=!$m.costs['keys']().__contains__(item))?!$p['op_eq']($p['getattr'](location, 'orig'), 'MapStone'):$and17):$and16))) {
			if ($p['bool'](($p['cmp'](value, 0) == 1))) {
				item = $p['__op_add']($add161='EX',$add162=$p['str'](value));
			}
			$m['balanceList']['append']($p['tuple']([item, location, assignment]));
		}
		else {
			$m['outputStr'] = $p['__op_add']($add163=$m['outputStr'],$add164=assignment);
		}
		return null;
	};
	$m['assign_to_location'].__name__ = 'assign_to_location';

	$m['assign_to_location'].__bind_type__ = 0;
	$m['assign_to_location'].__args__ = [null,null,['item'],['location']];
	$m['get_random_exp_value'] = function(expRemaining, expSlots) {
		var $div21,$div20,$add168,$div19,min,$add167,$add166,$add165,$div22,$mul35,$mul34,$mul36,$mul31,$mul33,$mul32;
		min = $m.random['randint'](2, 9);
		if ($p['bool'](($p['cmp'](expSlots, 1) < 1))) {
			return $p['max'](expRemaining, min);
		}
		return $p['float_int']($p['max']((typeof ($div21=(typeof ($mul33=(typeof ($mul31=expRemaining)==typeof ($mul32=$p['__op_add']($add165=(typeof inventory == "undefined"?$m.inventory:inventory).__getitem__('EX*'),$add166=(typeof ($div19=expSlots)==typeof ($div20=4) && typeof $div19=='number' && $div20 !== 0?
			$div19/$div20:
			$p['op_div']($div19,$div20)))) && typeof $mul31=='number'?
			$mul31*$mul32:
			$p['op_mul']($mul31,$mul32)))==typeof ($mul34=$m.random['uniform'](0.0, 2.0)) && typeof $mul33=='number'?
			$mul33*$mul34:
			$p['op_mul']($mul33,$mul34)))==typeof ($div22=(typeof ($mul35=expSlots)==typeof ($mul36=$p['__op_add']($add167=expSlots,$add168=(typeof inventory == "undefined"?$m.inventory:inventory).__getitem__('EX*'))) && typeof $mul35=='number'?
			$mul35*$mul36:
			$p['op_mul']($mul35,$mul36))) && typeof $div21=='number' && $div22 !== 0?
			$div21/$div22:
			$p['op_div']($div21,$div22)), min));
	};
	$m['get_random_exp_value'].__name__ = 'get_random_exp_value';

	$m['get_random_exp_value'].__bind_type__ = 0;
	$m['get_random_exp_value'].__args__ = [null,null,['expRemaining'],['expSlots']];
	$m['preferred_difficulty_assign'] = function(item, locationsToAssign) {
		var $sub22,$sub23,$sub20,$sub21,$sub26,$iter22_array,$sub24,$sub25,$add170,$add171,$add172,$add173,$add174,$add169,$add176,$iter23_idx,$iter22_type,total,loc,$iter23_iter,$mul40,$mul41,$mul42,$mul43,$iter22_iter,$sub19,$iter22_nextval,$add175,$iter23_array,$div24,$div23,$div25,$iter23_nextval,$div26,i,$iter22_idx,value,$mul44,$mul39,$mul38,$iter23_type,position,$mul37;
		total = 0.0;
		$iter22_iter = locationsToAssign;
		$iter22_nextval=$p['__iter_prepare']($iter22_iter,false);
		while (typeof($p['__wrapped_next']($iter22_nextval).$nextval) != 'undefined') {
			loc = $iter22_nextval.$nextval;
			if ($p['bool']($p['op_eq']((typeof pathDifficulty == "undefined"?$m.pathDifficulty:pathDifficulty), 'easy'))) {
				total = $p['__op_add']($add169=total,$add170=(typeof ($mul37=$p['__op_sub']($sub19=15,$sub20=$p['getattr'](loc, 'difficulty')))==typeof ($mul38=$p['__op_sub']($sub21=15,$sub22=$p['getattr'](loc, 'difficulty'))) && typeof $mul37=='number'?
					$mul37*$mul38:
					$p['op_mul']($mul37,$mul38)));
			}
			else {
				total = $p['__op_add']($add171=total,$add172=(typeof ($mul39=$p['getattr'](loc, 'difficulty'))==typeof ($mul40=$p['getattr'](loc, 'difficulty')) && typeof $mul39=='number'?
					$mul39*$mul40:
					$p['op_mul']($mul39,$mul40)));
			}
		}
		value = $m.random['random']();
		position = 0.0;
		$iter23_iter = $p['range'](0, $p['len'](locationsToAssign));
		$iter23_nextval=$p['__iter_prepare']($iter23_iter,false);
		while (typeof($p['__wrapped_next']($iter23_nextval).$nextval) != 'undefined') {
			i = $iter23_nextval.$nextval;
			if ($p['bool']($p['op_eq']((typeof pathDifficulty == "undefined"?$m.pathDifficulty:pathDifficulty), 'easy'))) {
				position = $p['__op_add']($add173=position,$add174=(typeof ($div23=(typeof ($mul41=$p['__op_sub']($sub23=15,$sub24=$p['getattr'](locationsToAssign.__getitem__(i), 'difficulty')))==typeof ($mul42=$p['__op_sub']($sub25=15,$sub26=$p['getattr'](locationsToAssign.__getitem__(i), 'difficulty'))) && typeof $mul41=='number'?
					$mul41*$mul42:
					$p['op_mul']($mul41,$mul42)))==typeof ($div24=total) && typeof $div23=='number' && $div24 !== 0?
					$div23/$div24:
					$p['op_div']($div23,$div24)));
			}
			else {
				position = $p['__op_add']($add175=position,$add176=(typeof ($div25=(typeof ($mul43=$p['getattr'](locationsToAssign.__getitem__(i), 'difficulty'))==typeof ($mul44=$p['getattr'](locationsToAssign.__getitem__(i), 'difficulty')) && typeof $mul43=='number'?
					$mul43*$mul44:
					$p['op_mul']($mul43,$mul44)))==typeof ($div26=total) && typeof $div25=='number' && $div26 !== 0?
					$div25/$div26:
					$p['op_div']($div25,$div26)));
			}
			if ($p['bool'](($p['cmp'](value, position) < 1))) {
				$m['assign_to_location'](item, locationsToAssign.__getitem__(i));
				break;
			}
		}
		locationsToAssign.__delitem__(i);
		return null;
	};
	$m['preferred_difficulty_assign'].__name__ = 'preferred_difficulty_assign';

	$m['preferred_difficulty_assign'].__bind_type__ = 0;
	$m['preferred_difficulty_assign'].__args__ = [null,null,['item'],['locationsToAssign']];
	$m['connect_doors'] = function(door1, door2, areas, requirements) {
		if (typeof requirements == 'undefined') requirements=arguments.callee.__args__[5][1];
		var $add178,$add179,$add177,$add189,$add188,$add181,$add180,$add183,$add182,$add185,$add184,$add187,$add186,connection2,connection1,$add196,$add197,$add194,$add195,$add192,$add193,$add190,$add191,$add198;
		connection1 = $m['Connection']($p['getattr'](door1, '$$name'), $p['getattr'](door2, '$$name'));
		connection1['add_requirements'](requirements, 1);
		areas.__getitem__($p['getattr'](door1, '$$name'))['add_connection'](connection1);
		connection2 = $m['Connection']($p['getattr'](door2, '$$name'), $p['getattr'](door1, '$$name'));
		connection2['add_requirements'](requirements, 1);
		areas.__getitem__($p['getattr'](door2, '$$name'))['add_connection'](connection2);
		return $p['__op_add']($add197=$p['__op_add']($add195=$p['__op_add']($add193=$p['__op_add']($add191=$p['__op_add']($add189=$p['__op_add']($add187=$p['__op_add']($add185=$p['__op_add']($add183=$p['__op_add']($add181=$p['__op_add']($add179=$p['__op_add']($add177=$p['str'](door1['get_key']()),$add178='|EN|'),$add180=$p['str']($p['getattr'](door2, 'x'))),$add182='|'),$add184=$p['str']($p['getattr'](door2, 'y'))),$add186='\n'),$add188=$p['str'](door2['get_key']())),$add190='|EN|'),$add192=$p['str']($p['getattr'](door1, 'x'))),$add194='|'),$add196=$p['str']($p['getattr'](door1, 'y'))),$add198='\n');
		return null;
	};
	$m['connect_doors'].__name__ = 'connect_doors';

	$m['connect_doors'].__bind_type__ = 0;
	$m['connect_doors'].__args__ = [null,null,['door1'],['door2'],['areas'],['requirements', $p['list'](['Free'])]];
	$m['randomize_entrances'] = function(areas) {
		var $add225,$add231,$sub27,$add241,$sub28,firstDoors,doorStr,target,$add242,$add239,$and22,$and21,$and20,targets,$add230,group,$iter24_nextval,$iter24_array,$add222,$iter24_type,$add233,$add232,activeGroups,horuEntryGroup,$add219,$add218,$add235,$add234,$add215,$add214,$add217,$add216,$add211,$add210,match,$add212,$sub30,$add240,$sub29,$or13,index,$add228,outerDoors,$or12,$add236,$add202,lastDoorIndex,$add223,x,requirements,$iter24_iter,$and19,lastDoors,$add237,$add238,name,$add229,i,innerDoors,$iter24_idx,lines,$add199,$add220,$add221,$add208,$add209,$add224,$add213,$add226,$add227,y,$add203,$add200,$add201,$add206,$add207,$add204,$add205;
		lines = '<?xml version="1.0"?>\n<Doors>\n  <Door name="Ginso">\n    <Inner>\n      <X>522</X>\n      <Y>1</Y>\n      <Group>12</Group>\n     </Inner>\n     <Outer>\n       <X>527</X>\n       <Y>-43</Y>\n       <Group>0</Group>\n     </Outer>\n  </Door>\n  <Door name="Forlorn">\n    <Inner>\n      <X>-717</X>\n      <Y>-408</Y>\n      <Group>12</Group>\n     </Inner>\n     <Outer>\n       <X>-668</X>\n       <Y>-246</Y>\n       <Group>0</Group>\n     </Outer>\n  </Door>\n  <Door name="Horu">\n    <Inner>\n      <X>68</X>\n      <Y>169</Y>\n      <Group>1</Group>\n     </Inner>\n     <Outer>\n       <X>-78</X>\n       <Y>2</Y>\n       <Group>0</Group>\n     </Outer>\n  </Door>\n  <Door name="L1">\n    <Inner>\n      <X>-24</X>\n      <Y>369</Y>\n      <Group>3</Group>\n     </Inner>\n     <Outer>\n       <X>20</X>\n       <Y>371</Y>\n       <Group>1</Group>\n     </Outer>\n  </Door>\n  <Door name="L2">\n    <Inner>\n      <X>-13</X>\n      <Y>301</Y>\n      <Group>4</Group>\n     </Inner>\n     <Outer>\n       <X>13</X>\n       <Y>293</Y>\n       <Group>4</Group>\n     </Outer>\n  </Door>\n  <Door name="L3">\n    <Inner>\n      <X>-28</X>\n      <Y>244</Y>\n      <Group>5</Group>\n     </Inner>\n     <Outer>\n       <X>18</X>\n       <Y>248</Y>\n       <Group>5</Group>\n     </Outer>\n  </Door>\n  <Door name="L4">\n    <Inner>\n      <X>-12</X>\n      <Y>188</Y>\n      <Group>6</Group>\n     </Inner>\n     <Outer>\n       <X>14</X>\n       <Y>191</Y>\n       <Group>6</Group>\n     </Outer>\n  </Door>\n  <Door name="R1">\n    <Inner>\n      <X>153</X>\n      <Y>413</Y>\n      <Group>7</Group>\n     </Inner>\n     <Outer>\n       <X>125</X>\n       <Y>382</Y>\n       <Group>2</Group>\n     </Outer>\n  </Door>\n  <Door name="R2">\n    <Inner>\n      <X>163</X>\n      <Y>266</Y>\n      <Group>8</Group>\n     </Inner>\n     <Outer>\n       <X>128</X>\n       <Y>288</Y>\n       <Group>8</Group>\n     </Outer>\n  </Door>\n  <Door name="R3">\n    <Inner>\n      <X>171</X>\n      <Y>218</Y>\n      <Group>9</Group>\n     </Inner>\n     <Outer>\n       <X>126</X>\n       <Y>245</Y>\n       <Group>9</Group>\n     </Outer>\n  </Door>\n  <Door name="R4">\n    <Inner>\n      <X>144</X>\n      <Y>151</Y>\n      <Group>10</Group>\n     </Inner>\n     <Outer>\n       <X>126</X>\n       <Y>196</Y>\n       <Group>10</Group>\n     </Outer>\n  </Door>\n  <Door name="HoruEscape">\n    <Inner>\n      <X>-242</X>\n      <Y>489</Y>\n      <Group>12</Group>\n     </Inner>\n     <Outer>\n       <X>18</X>\n       <Y>100</Y>\n       <Group>12</Group>\n     </Outer>\n  </Door>\n</Doors>\n'['$$split']('\n');
		outerDoors = $p['list']([$p['list']([]), $p['list']([]), $p['list']([]), $p['list']([]), $p['list']([]), $p['list']([]), $p['list']([]), $p['list']([]), $p['list']([]), $p['list']([]), $p['list']([]), $p['list']([]), $p['list']([])]);
		innerDoors = $p['list']([$p['list']([]), $p['list']([]), $p['list']([]), $p['list']([]), $p['list']([]), $p['list']([]), $p['list']([]), $p['list']([]), $p['list']([]), $p['list']([]), $p['list']([]), $p['list']([]), $p['list']([])]);
		i = 0;
		while ($p['bool'](($p['cmp'](i, $p['len'](lines)) == -1))) {
			match = $m['re']['match']('.*<Door name="(.+)".*', lines.__getitem__(i));
			if ($p['bool'](match)) {
				name = match['group'](1);
				group = $p['float_int']((typeof selectText == "undefined"?$m.selectText:selectText)('<Group>', '</Group>', lines.__getitem__($p['__op_add']($add199=i,$add200=4))));
				x = $p['float_int']((typeof selectText == "undefined"?$m.selectText:selectText)('<X>', '</X>', lines.__getitem__($p['__op_add']($add201=i,$add202=2))));
				y = $p['float_int']((typeof selectText == "undefined"?$m.selectText:selectText)('<Y>', '</Y>', lines.__getitem__($p['__op_add']($add203=i,$add204=3))));
				innerDoors.__getitem__(group)['append']($m['Door']($p['__op_add']($add205=name,$add206='InnerDoor'), x, y));
				group = $p['float_int']((typeof selectText == "undefined"?$m.selectText:selectText)('<Group>', '</Group>', lines.__getitem__($p['__op_add']($add207=i,$add208=9))));
				x = $p['float_int']((typeof selectText == "undefined"?$m.selectText:selectText)('<X>', '</X>', lines.__getitem__($p['__op_add']($add209=i,$add210=7))));
				y = $p['float_int']((typeof selectText == "undefined"?$m.selectText:selectText)('<Y>', '</Y>', lines.__getitem__($p['__op_add']($add211=i,$add212=8))));
				outerDoors.__getitem__(group)['append']($m['Door']($p['__op_add']($add213=name,$add214='OuterDoor'), x, y));
				i = $p['__op_add']($add215=i,$add216=10);
			}
			i = $p['__op_add']($add217=i,$add218=1);
		}
		$m.random['shuffle'](outerDoors.__getitem__(0));
		$m.random['shuffle'](innerDoors.__getitem__(12));
		firstDoors = $p['list']([]);
		lastDoors = $p['list']([]);
		firstDoors['append'](outerDoors.__getitem__(0)['pop'](0));
		firstDoors['append'](outerDoors.__getitem__(0)['pop'](0));
		lastDoors['append'](innerDoors.__getitem__(12)['pop'](0));
		lastDoors['append'](innerDoors.__getitem__(12)['pop'](0));
		doorStr = '';
		doorStr = $p['__op_add']($add219=doorStr,$add220=$m['connect_doors'](outerDoors.__getitem__(2)['pop'](0), innerDoors.__getitem__(7)['pop'](0), areas));
		activeGroups = $p['list']([0, 1, 8]);
		targets = $p['list']([3, 4, 5, 6, 8, 9, 10, 12]);
		$m.random['shuffle'](targets);
		horuEntryGroup = $m.random['randint'](4, 9);
		if ($p['bool'](((($p['cmp'](horuEntryGroup, 7))|1) == 1))) {
			horuEntryGroup = $p['__op_add']($add221=horuEntryGroup,$add222=2);
		}
		if ($p['bool']($p['op_eq'](horuEntryGroup, 11))) {
			horuEntryGroup = 1;
			if ($p['bool'](($p['cmp']($m.random['random'](), 0.5) == 1))) {
				doorStr = $p['__op_add']($add223=doorStr,$add224=$m['connect_doors'](firstDoors.__getitem__(0), innerDoors.__getitem__(1)['pop'](0), areas));
				outerDoors.__getitem__(0)['append'](firstDoors.__getitem__(1));
			}
			else {
				doorStr = $p['__op_add']($add225=doorStr,$add226=$m['connect_doors'](firstDoors.__getitem__(0), outerDoors.__getitem__(1)['pop'](0), areas));
				outerDoors.__getitem__(0)['append'](firstDoors.__getitem__(1));
				outerDoors.__getitem__(0)['append'](innerDoors.__getitem__(1)['pop'](0));
			}
		}
		else {
			requirements = $p['list'](['Free']);
			if ($p['bool']($p['op_eq']($p['getattr'](firstDoors.__getitem__(1), '$$name'), 'GinsoDoorOuter'))) {
				requirements = $p['list'](['GinsoKey']);
			}
			if ($p['bool']($p['op_eq']($p['getattr'](firstDoors.__getitem__(1), '$$name'), 'ForlornDoorOuter'))) {
				requirements = $p['list'](['ForlornKey']);
			}
			doorStr = $p['__op_add']($add227=doorStr,$add228=$m['connect_doors'](firstDoors.__getitem__(0), outerDoors.__getitem__(horuEntryGroup)['pop'](0), areas, requirements));
			doorStr = $p['__op_add']($add229=doorStr,$add230=$m['connect_doors'](firstDoors.__getitem__(1), innerDoors.__getitem__($p['__op_sub']($sub27=horuEntryGroup,$sub28=1))['pop'](0), areas));
			targets['remove']($p['__op_sub']($sub29=horuEntryGroup,$sub30=1));
		}
		while ($p['bool'](($p['cmp']($p['len'](targets), 0) == 1))) {
			index = $m.random['randrange']($p['len'](activeGroups));
			group = activeGroups.__getitem__(index);
			if ($p['bool'](!$p['bool'](outerDoors.__getitem__(group)))) {
				activeGroups.__delitem__(index);
				continue;
			}
			target = targets.__getitem__(0);
			if ($p['bool'](!$p['bool'](innerDoors.__getitem__(target)))) {
				targets.__delitem__(0);
				continue;
			}
			if ($p['bool'](($p['cmp'](target, 12) == -1))) {
				activeGroups['append']($p['__op_add']($add231=target,$add232=1));
			}
			if ($p['bool'](($p['bool']($or12=($p['bool']($and19=$p['op_eq'](target, 6))?!targets.__contains__(10):$and19))?$or12:($p['bool']($and21=$p['op_eq'](target, 10))?!targets.__contains__(6):$and21)))) {
				activeGroups['append'](12);
			}
			doorStr = $p['__op_add']($add233=doorStr,$add234=$m['connect_doors'](outerDoors.__getitem__(group)['pop'](0), innerDoors.__getitem__(target)['pop'](0), areas));
		}
		lastDoorIndex = 0;
		$iter24_iter = $p['range'](13);
		$iter24_nextval=$p['__iter_prepare']($iter24_iter,false);
		while (typeof($p['__wrapped_next']($iter24_nextval).$nextval) != 'undefined') {
			group = $iter24_nextval.$nextval;
			if ($p['bool'](innerDoors.__getitem__(group))) {
				doorStr = $p['__op_add']($add235=doorStr,$add236=$m['connect_doors'](innerDoors.__getitem__(group)['pop'](0), lastDoors.__getitem__(lastDoorIndex), areas));
				lastDoorIndex = $p['__op_add']($add237=lastDoorIndex,$add238=1);
			}
			if ($p['bool'](outerDoors.__getitem__(group))) {
				doorStr = $p['__op_add']($add239=doorStr,$add240=$m['connect_doors'](outerDoors.__getitem__(group)['pop'](0), lastDoors.__getitem__(lastDoorIndex), areas));
				lastDoorIndex = $p['__op_add']($add241=lastDoorIndex,$add242=1);
			}
		}
		return doorStr;
	};
	$m['randomize_entrances'].__name__ = 'randomize_entrances';

	$m['randomize_entrances'].__bind_type__ = 0;
	$m['randomize_entrances'].__args__ = [null,null,['areas']];
	$m['selectText'] = function(selectFrom, selectTo, line) {
		var $add247,$add250,$add246,$add244,$add245,$add243,$add248,$add249;
		return $m['re']['match']($p['__op_add']($add249=$p['__op_add']($add247=$p['__op_add']($add245=$p['__op_add']($add243='.*',$add244=selectFrom),$add246='(.*)'),$add248=selectTo),$add250='.*'), line)['group'](1);
	};
	$m['selectText'].__name__ = 'selectText';

	$m['selectText'].__bind_type__ = 0;
	$m['selectText'].__args__ = [null,null,['selectFrom'],['selectTo'],['line']];
	$m['placeItemsMulti'] = function(seed, expPool, hardMode, includePlants, shardsMode, limitkeysMode, cluesMode, noTeleporters, modes, flags, syncFlags, starvedMode, preferPathDifficulty, setNonProgressiveMapstones, playerCountIn, balanced, entrance) {
		var $add264,$add260,$add261,$add262,$add263,$add259,$add258,$add251,$add253,$add252,$add255,$add254,$add257,$add256,playerFlags,placement,playerID,placements;
		placements = $p['list']([]);
		$m['sharedMap'] = $p['dict']([]);
		playerID = 1;
		playerFlags = flags;
		if ($p['bool'](syncFlags)) {
			playerFlags = $p['__op_add']($add255=$p['__op_add']($add253=$p['__op_add']($add251=flags,$add252=syncFlags),$add254='.'),$add256=$p['str'](playerID));
		}
		placement = (typeof placeItems == "undefined"?$m.placeItems:placeItems)(seed, expPool, hardMode, includePlants, shardsMode, limitkeysMode, cluesMode, noTeleporters, modes, playerFlags, starvedMode, preferPathDifficulty, setNonProgressiveMapstones, playerCountIn, playerID, balanced, entrance);
		if ($p['bool'](!$p['bool'](placement))) {
			return $m['placeItemsMulti'](seed, expPool, hardMode, includePlants, shardsMode, limitkeysMode, cluesMode, noTeleporters, modes, flags, syncFlags, starvedMode, preferPathDifficulty, setNonProgressiveMapstones, playerCountIn, balanced, entrance);
		}
		placements['append'](placement);
		while ($p['bool'](($p['cmp'](playerID, playerCountIn) == -1))) {
			playerID = $p['__op_add']($add257=playerID,$add258=1);
			if ($p['bool'](syncFlags)) {
				playerFlags = $p['__op_add']($add263=$p['__op_add']($add261=$p['__op_add']($add259=flags,$add260=syncFlags),$add262='.'),$add264=$p['str'](playerID));
			}
			placement = (typeof placeItems == "undefined"?$m.placeItems:placeItems)(seed, expPool, hardMode, includePlants, shardsMode, limitkeysMode, cluesMode, noTeleporters, modes, playerFlags, starvedMode, preferPathDifficulty, setNonProgressiveMapstones, playerCountIn, playerID, balanced, entrance);
			if ($p['bool'](!$p['bool'](placement))) {
				return $m['placeItemsMulti'](seed, expPool, hardMode, includePlants, shardsMode, limitkeysMode, cluesMode, noTeleporters, modes, flags, syncFlags, starvedMode, preferPathDifficulty, setNonProgressiveMapstones, playerCountIn, balanced, entrance);
			}
			placements['append'](placement);
		}
		return placements;
	};
	$m['placeItemsMulti'].__name__ = 'placeItemsMulti';

	$m['placeItemsMulti'].__bind_type__ = 0;
	$m['placeItemsMulti'].__args__ = [null,null,['seed'],['expPool'],['hardMode'],['includePlants'],['shardsMode'],['limitkeysMode'],['cluesMode'],['noTeleporters'],['modes'],['flags'],['syncFlags'],['starvedMode'],['preferPathDifficulty'],['setNonProgressiveMapstones'],['playerCountIn'],['balanced'],['entrance']];
	$m['placeItems'] = function(seed, expPool, hardMode, includePlants, shardsMode, limitkeysMode, cluesMode, noTeleporters, modes, flags, starvedMode, preferPathDifficulty, setNonProgressiveMapstones, playerCountIn, playerIDIn, balancedIn, entrance, depth) {
		if (typeof depth == 'undefined') depth=arguments.callee.__args__[19][1];
		var $iter44_array,$iter33_type,$iter40_type,currentConnection,$add397,$and34,$and35,$and36,$and30,$and31,$and32,$and27,$iter28_array,item,$iter42_nextval,$iter34_iter,$iter43_nextval,$add369,$add283,$add280,$add281,$add286,$add287,$add284,$add285,$add361,$add360,$add288,$add362,$add365,$add364,$add367,$add366,horu,$iter37_array,$iter33_nextval,$iter35_nextval,$iter35_iter,spoilerStr,$iter38_idx,locationsToAssign,$add339,$iter36_idx,spoilerPath,groupDepth,$iter41_idx,$iter42_type,itemsToAssign,difficultyMap,$iter32_type,$iter40_array,$sub47,$iter39_array,$add358,$iter45_iter,$iter34_array,$mul52,$mul51,$mul50,lines,$mul54,$add329,$add328,$iter39_iter,$add325,$add324,$add327,$add326,$add321,$add320,$iter37_nextval,$add322,$iter25_array,satisfied,$iter26_idx,$iter38_type,$iter30_nextval,$iter43_array,$iter27_idx,$iter31_idx,$iter39_nextval,$and33,$iter40_nextval,ginso,mapstones,mode,$iter25_nextval,$iter45_idx,$and29,$and28,$and23,event,$and25,$and24,$iter36_type,$iter27_type,$iter44_idx,$iter30_type,$iter31_array,$add279,$add278,$add277,$add276,$add275,$add274,$add273,$add272,$add271,$add270,difficulty,$iter30_idx,$iter45_array,$iter40_idx,area,$add282,$iter32_idx,$add368,$add389,$add388,$add383,$add382,$add381,$add380,$add387,$add386,$add385,$add384,$iter44_iter,$add376,$add377,$add374,$add375,$add372,$add373,$add370,$add371,$add363,$add378,$add379,$add289,$iter42_array,$or15,$or14,$or17,$or16,$iter29_idx,$iter43_iter,$mul53,$iter38_nextval,$iter36_nextval,$iter41_nextval,instance,$iter33_idx,$iter41_array,$iter44_nextval,$iter35_array,limitKeysPool,$add323,$add349,$add348,$add347,$add346,$add345,$add344,$add343,$add342,$add341,$add340,seedDifficultyMap,$iter36_iter,$add338,mapstoneCount,$iter27_iter,$add332,$add333,$add330,$add331,$add336,$add337,$add334,$add335,$sub31,$sub33,$sub32,$sub35,$sub34,$sub37,$sub36,$sub39,$sub38,$iter36_array,$iter28_iter,$iter34_idx,$iter41_type,$iter37_iter,$iter30_array,$iter26_array,$iter27_nextval,forlorn,opening,$iter29_array,$iter29_nextval,key,$iter38_array,$iter39_idx,$iter30_iter,$iter29_type,connection,$iter43_type,$add268,$add269,$add265,$add266,$add267,$iter31_nextval,$iter41_iter,$iter32_array,$add412,$add411,$add410,$add398,$add390,$add391,$add392,$add393,$add394,$add395,$add396,$iter33_array,plants,$iter29_iter,$add303,$add302,$add301,$add300,$add307,$add306,$add305,$add304,currentGroupSpoiler,$add309,$add308,$iter38_iter,$iter33_iter,$iter26_nextval,$iter28_idx,$sub48,$sub40,$sub41,$sub42,$sub43,$sub44,$sub45,$sub46,$add359,$iter26_type,keys,$add350,$add351,$iter31_type,$iter25_type,i,$iter25_iter,$iter34_type,$iter31_iter,$iter32_iter,skill,keystoneCount,location,match,$add295,$add294,$add297,$add296,$add291,$add290,$add293,$add292,$add354,$add355,$add356,$add357,$add299,$add298,$add352,$add353,$iter35_idx,$iter45_type,$iter28_nextval,$iter43_idx,$iter32_nextval,$iter26_iter,$iter45_nextval,$iter37_type,$iter42_iter,$iter44_type,loc,$iter37_idx,$iter39_type,match2,$iter40_iter,$add408,$add409,$add404,$add405,$add406,$add407,$add400,$add401,$add402,$add403,$iter42_idx,$mul48,$mul49,$iter27_array,$mul45,$mul46,$mul47,$and26,$add310,$add311,$add312,$add313,$add314,$add315,$add316,$add317,$add318,$add319,$iter28_type,$iter34_nextval,$add399,$iter35_type,$iter25_idx;
		$m['shards'] = shardsMode;
		$m['limitkeys'] = limitkeysMode;
		$m['starved'] = starvedMode;
		$m['pathDifficulty'] = preferPathDifficulty;
		$m['nonProgressiveMapstones'] = setNonProgressiveMapstones;
		$m['balanced'] = balancedIn;
		$m['balanceLevel'] = 0;
		$m['balanceList'] = $p['list']([]);
		$m['balanceListLeftovers'] = $p['list']([]);
		$m['playerCount'] = playerCountIn;
		$m['playerID'] = playerIDIn;
		$m['skillsOutput'] = $p['dict']([['WallJump', 'SK3'], ['ChargeFlame', 'SK2'], ['Dash', 'SK50'], ['Stomp', 'SK4'], ['DoubleJump', 'SK5'], ['Glide', 'SK14'], ['Bash', 'SK0'], ['Climb', 'SK12'], ['Grenade', 'SK51'], ['ChargeJump', 'SK8']]);
		$m['eventsOutput'] = $p['dict']([['GinsoKey', 'EV0'], ['Water', 'EV1'], ['ForlornKey', 'EV2'], ['Wind', 'EV3'], ['HoruKey', 'EV4'], ['Warmth', 'EV5'], ['WaterVeinShard', 'RB17'], ['GumonSealShard', 'RB19'], ['SunstoneShard', 'RB21']]);
		seedDifficultyMap = $p['dict']([['Dash', 2], ['Bash', 2], ['Glide', 3], ['DoubleJump', 2], ['ChargeJump', 1]]);
		$m['seedDifficulty'] = 0;
		limitKeysPool = $p['list'](['SKWallJump', 'SKChargeFlame', 'SKDash', 'SKStomp', 'SKDoubleJump', 'SKGlide', 'SKClimb', 'SKGrenade', 'SKChargeJump', 'EVGinsoKey', 'EVForlornKey', 'EVHoruKey', 'SKBash', 'EVWater', 'EVWind']);
		difficultyMap = $p['dict']([['normal', 1], ['speed', 2], ['lure', 2], ['speed-lure', 3], ['dboost', 2], ['dboost-light', 1], ['dboost-hard', 3], ['cdash', 2], ['cdash-farming', 2], ['dbash', 3], ['extended', 3], ['extended-damage', 3], ['lure-hard', 4], ['extreme', 4], ['glitched', 5], ['timed-level', 5]]);
		$m['outputStr'] = '';
		$m['eventList'] = $p['list']([]);
		spoilerStr = '';
		groupDepth = 0;
		$m['costs'] = $p['dict']([['Free', 0], ['MS', 0], ['KS', 2], ['EC', 6], ['HC', 12], ['WallJump', 13], ['ChargeFlame', 13], ['DoubleJump', 13], ['Bash', 41], ['Stomp', 29], ['Glide', 17], ['Climb', 41], ['ChargeJump', 59], ['Dash', 13], ['Grenade', 29], ['GinsoKey', 12], ['ForlornKey', 12], ['HoruKey', 12], ['Water', 80], ['Wind', 80], ['WaterVeinShard', 5], ['GumonSealShard', 5], ['SunstoneShard', 5], ['TPForlorn', 120], ['TPGrotto', 60], ['TPSorrow', 90], ['TPGrove', 60], ['TPSwamp', 60], ['TPValley', 90]]);
		$m['areas'] = $p['dict']([]);
		$m['areasReached'] = $p['dict']([]);
		$m['currentAreas'] = $p['list']([]);
		$m['areaList'] = $p['list']([]);
		$m['connectionQueue'] = $p['list']([]);
		$m['assignQueue'] = $p['list']([]);
		$m['itemCount'] = 244.0;
		$m['expRemaining'] = expPool;
		keystoneCount = 0;
		mapstoneCount = 0;
		if ($p['bool'](!$p['bool'](hardMode))) {
			$m['itemPool'] = $p['dict']([['EX1', 1], ['EX*', 91], ['KS', 40], ['MS', 11], ['AC', 33], ['EC', 14], ['HC', 12], ['WallJump', 1], ['ChargeFlame', 1], ['Dash', 1], ['Stomp', 1], ['DoubleJump', 1], ['Glide', 1], ['Bash', 1], ['Climb', 1], ['Grenade', 1], ['ChargeJump', 1], ['GinsoKey', 1], ['ForlornKey', 1], ['HoruKey', 1], ['Water', 1], ['Wind', 1], ['Warmth', 1], ['RB0', 3], ['RB1', 3], ['RB6', 3], ['RB8', 1], ['RB9', 1], ['RB10', 1], ['RB11', 1], ['RB12', 1], ['RB13', 3], ['RB15', 3], ['WaterVeinShard', 0], ['GumonSealShard', 0], ['SunstoneShard', 0], ['TPForlorn', 1], ['TPGrotto', 1], ['TPSorrow', 1], ['TPGrove', 1], ['TPSwamp', 1], ['TPValley', 1]]);
		}
		else {
			$m['itemPool'] = $p['dict']([['EX1', 1], ['EX*', 167], ['KS', 40], ['MS', 11], ['AC', 0], ['EC', 3], ['HC', 0], ['WallJump', 1], ['ChargeFlame', 1], ['Dash', 1], ['Stomp', 1], ['DoubleJump', 1], ['Glide', 1], ['Bash', 1], ['Climb', 1], ['Grenade', 1], ['ChargeJump', 1], ['GinsoKey', 1], ['ForlornKey', 1], ['HoruKey', 1], ['Water', 1], ['Wind', 1], ['Warmth', 1], ['RB0', 0], ['RB1', 0], ['RB6', 0], ['RB8', 0], ['RB9', 0], ['RB10', 0], ['RB11', 0], ['RB12', 0], ['RB13', 0], ['RB15', 0], ['WaterVeinShard', 0], ['GumonSealShard', 0], ['SunstoneShard', 0], ['TPForlorn', 1], ['TPGrotto', 1], ['TPSorrow', 1], ['TPGrove', 1], ['TPSwamp', 1], ['TPValley', 1]]);
		}
		plants = $p['list']([]);
		if ($p['bool'](!$p['bool'](includePlants))) {
			$m['itemCount'] = $p['__op_sub']($sub31=$m['itemCount'],$sub32=24);
			$m['itemPool'].__setitem__('EX*', $p['__op_sub']($sub33=$m['itemPool'].__getitem__('EX*'),$sub34=24));
		}
		if ($p['bool']($m['shards'])) {
			$m['itemPool'].__setitem__('WaterVeinShard', 5);
			$m['itemPool'].__setitem__('GumonSealShard', 5);
			$m['itemPool'].__setitem__('SunstoneShard', 5);
			$m['itemPool'].__setitem__('GinsoKey', 0);
			$m['itemPool'].__setitem__('ForlornKey', 0);
			$m['itemPool'].__setitem__('HoruKey', 0);
			$m['itemPool'].__setitem__('EX*', $p['__op_sub']($sub35=$m['itemPool'].__getitem__('EX*'),$sub36=12));
		}
		if ($p['bool']($m['limitkeys'])) {
			satisfied = false;
			while ($p['bool'](!$p['bool'](satisfied))) {
				ginso = $m.random['randint'](0, 12);
				if ($p['bool']($p['op_eq'](ginso, 12))) {
					ginso = 14;
				}
				forlorn = $m.random['randint'](0, 13);
				horu = $m.random['randint'](0, 14);
				if ($p['bool'](($p['bool']($and23=!$p['op_eq'](ginso, forlorn))?($p['bool']($and24=!$p['op_eq'](ginso, horu))?($p['bool']($and25=!$p['op_eq'](forlorn, horu))?($p['cmp']($p['__op_add']($add265=ginso,$add266=forlorn), 26) == -1):$and25):$and24):$and23))) {
					satisfied = true;
				}
			}
			$m['keySpots'] = $p['dict']([[limitKeysPool.__getitem__(ginso), 'GinsoKey'], [limitKeysPool.__getitem__(forlorn), 'ForlornKey'], [limitKeysPool.__getitem__(horu), 'HoruKey']]);
			$m['itemPool'].__setitem__('GinsoKey', 0);
			$m['itemPool'].__setitem__('ForlornKey', 0);
			$m['itemPool'].__setitem__('HoruKey', 0);
			$m['itemCount'] = $p['__op_sub']($sub37=$m['itemCount'],$sub38=3);
		}
		if ($p['bool'](noTeleporters)) {
			$m['itemPool'].__setitem__('TPForlorn', 0);
			$m['itemPool'].__setitem__('TPGrotto', 0);
			$m['itemPool'].__setitem__('TPSorrow', 0);
			$m['itemPool'].__setitem__('TPGrove', 0);
			$m['itemPool'].__setitem__('TPSwamp', 0);
			$m['itemPool'].__setitem__('TPValley', 0);
			$m['itemPool'].__setitem__('EX*', $p['__op_add']($add267=$m['itemPool'].__getitem__('EX*'),$add268=6));
		}
		$m['inventory'] = $p['dict']([['EX1', 0], ['EX*', 0], ['KS', 0], ['MS', 0], ['AC', 0], ['EC', 1], ['HC', 3], ['WallJump', 0], ['ChargeFlame', 0], ['Dash', 0], ['Stomp', 0], ['DoubleJump', 0], ['Glide', 0], ['Bash', 0], ['Climb', 0], ['Grenade', 0], ['ChargeJump', 0], ['GinsoKey', 0], ['ForlornKey', 0], ['HoruKey', 0], ['Water', 0], ['Wind', 0], ['Warmth', 0], ['RB0', 0], ['RB1', 0], ['RB6', 0], ['RB8', 0], ['RB9', 0], ['RB10', 0], ['RB11', 0], ['RB12', 0], ['RB13', 0], ['RB15', 0], ['WaterVeinShard', 0], ['GumonSealShard', 0], ['SunstoneShard', 0], ['TPForlorn', 1], ['TPGrotto', 1], ['TPSorrow', 1], ['TPGrove', 1], ['TPSwamp', 1], ['TPValley', 1]]);
		if ($p['bool'](($p['cmp']($m['playerID'], 1) == 1))) {
			$iter25_iter = $m['sharedList'];
			$iter25_nextval=$p['__iter_prepare']($iter25_iter,false);
			while (typeof($p['__wrapped_next']($iter25_nextval).$nextval) != 'undefined') {
				item = $iter25_nextval.$nextval;
				$m['itemPool'].__setitem__('EX*', $p['__op_add']($add269=$m['itemPool'].__getitem__('EX*'),$add270=$m['itemPool'].__getitem__(item)));
				$m['itemPool'].__setitem__(item, 0);
			}
			$m['itemPool'].__setitem__('EX*', $p['__op_sub']($sub39=$m['itemPool'].__getitem__('EX*'),$sub40=$m['sharedMap'].__getitem__($m['playerID'])));
			$m['itemCount'] = $p['__op_sub']($sub41=$m['itemCount'],$sub42=$m['sharedMap'].__getitem__($m['playerID']));
		}
		lines = '<?xml version="1.0"?>\n<Areas>\n  <Area name="SunkenGladesRunaway">\n    <Locations>\n      <Location>\n        <X>92</X>\n        <Y>-227</Y>\n        <Item>EX15</Item>\n        <Difficulty>0</Difficulty>\n        <Zone>Glades</Zone>\n      </Location>\n      <Location>\n        <X>-154</X>\n        <Y>-271</Y>\n        <Item>EX15</Item>\n        <Difficulty>0</Difficulty>\n        <Zone>Glades</Zone>\n      </Location>\n      <Location>\n        <X>83</X>\n        <Y>-222</Y>\n        <Item>KS</Item>\n        <Difficulty>0</Difficulty>\n        <Zone>Glades</Zone>\n      </Location>\n      <Location>\n        <X>-11</X>\n        <Y>-206</Y>\n        <Item>KS</Item>\n        <Difficulty>0</Difficulty>\n        <Zone>Glades</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n      <Connection>\n        <Home name="SunkenGladesRunaway"/>\n        <Target name="SunkenGladesNadePool"/>\n        <Requirements>\n          <Requirement mode="normal">Water+Grenade</Requirement>\n          <Requirement mode="dboost">Grenade+HC+HC+HC+HC+HC+HC</Requirement>\n          <Requirement mode="dboost">Grenade+HC+HC+HC+HC+HC+Stomp</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="SunkenGladesRunaway"/>\n        <Target name="SunkenGladesNadeTree"/>\n        <Requirements>\n          <Requirement mode="speed">Grenade+WallJump+DoubleJump</Requirement>\n          <Requirement mode="normal">Grenade+ChargeJump</Requirement>\n          <Requirement mode="normal">Grenade+Bash</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="SunkenGladesRunaway"/>\n        <Target name="SunkenGladesMainPool"/>\n        <Requirements>\n          <Requirement mode="normal">Water</Requirement>\n          <Requirement mode="dboost">Bash</Requirement>\n          <Requirement mode="dboost">Stomp</Requirement>\n          <Requirement mode="dboost">HC+HC+HC+HC</Requirement>\n          <Requirement mode="extreme">Free</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="SunkenGladesRunaway"/>\n        <Target name="SunkenGladesMainPoolDeep"/>\n        <Requirements>\n          <Requirement mode="normal">Water</Requirement>\n          <Requirement mode="dboost">HC+HC+HC+HC+HC+HC+HC</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="SunkenGladesRunaway"/>\n        <Target name="WallJump"/>\n        <Requirements>\n          <Requirement mode="normal">KS+KS</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="SunkenGladesRunaway"/>\n        <Target name="DashArea"/>\n        <Requirements>\n          <Requirement mode="normal">WallJump</Requirement>\n          <Requirement mode="normal">Climb</Requirement>\n          <Requirement mode="normal">ChargeJump</Requirement>\n          <Requirement mode="normal">Bash+Grenade</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="SunkenGladesRunaway"/>\n        <Target name="FronkeyWalkRoof"/>\n        <Requirements>\n          <Requirement mode="normal">ChargeJump</Requirement>\n          <Requirement mode="lure">Bash</Requirement>\n          <Requirement mode="normal">Glide+Wind</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Entrance/>\n        <Home name="SunkenGladesRunaway"/>\n        <Target name="Forlorn"/>\n        <Requirements>\n          <Requirement mode="dboost-light">ForlornKey+TPForlorn+DoubleJump+ChargeJump</Requirement>\n          <Requirement mode="dboost-light">ForlornKey+TPForlorn+DoubleJump+Bash</Requirement>\n          <Requirement mode="dboost-light">ForlornKey+TPForlorn+Glide+ChargeJump</Requirement>\n          <Requirement mode="dboost-light">ForlornKey+TPForlorn+Glide+Bash</Requirement>\n          <Requirement mode="dboost-light">ForlornKey+TPForlorn+Grenade+Bash</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="SunkenGladesRunaway"/>\n        <Target name="MoonGrotto"/>\n        <Requirements>\n          <Requirement mode="normal">TPGrotto+ChargeJump</Requirement>\n          <Requirement mode="normal">TPGrotto+WallJump</Requirement>\n          <Requirement mode="normal">TPGrotto+Climb</Requirement>\n          <Requirement mode="normal">TPGrotto+Grenade+Bash</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="SunkenGladesRunaway"/>\n        <Target name="GumoHideoutMapStone"/>\n        <Requirements>\n          <Requirement mode="normal">TPGrotto+MS</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="SunkenGladesRunaway"/>\n        <Target name="HollowGrove"/>\n        <Requirements>\n          <Requirement mode="normal">TPSwamp</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="SunkenGladesRunaway"/>\n        <Target name="SpiritTreeRefined"/>\n        <Requirements>\n          <Requirement mode="normal">TPGrove</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="SunkenGladesRunaway"/>\n        <Target name="ValleyRight"/>\n        <Requirements>\n          <Requirement mode="normal">TPValley+Bash+WallJump</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="SunkenGladesRunaway"/>\n        <Target name="Sunstone"/>\n        <Requirements>\n          <Requirement mode="normal">TPSorrow+Glide+Climb+ChargeJump+Stomp</Requirement>\n          <Requirement mode="extended-damage">TPSorrow+Glide+Stomp+ChargeJump+Dash+HC+HC+HC+HC+HC</Requirement>\n          <Requirement mode="dbash">TPSorrow+Glide+Stomp+Bash</Requirement>\n          <Requirement mode="dbash">TPSorrow+Glide+ChargeJump+Bash</Requirement>\n        </Requirements>\n      </Connection>\n    </Connections>\n  </Area>\n  <Area name="SunkenGladesNadePool">\n    <Locations>\n      <Location>\n        <X>59</X>\n        <Y>-280</Y>\n        <Item>EX200</Item>\n        <Difficulty>2</Difficulty>\n        <Zone>Glades</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n    </Connections>\n  </Area>\n  <Area name="SunkenGladesNadeTree">\n    <Locations>\n      <Location>\n        <X>82</X>\n        <Y>-196</Y>\n        <Item>AC</Item>\n        <Difficulty>1</Difficulty>\n        <Zone>Glades</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n    </Connections>\n  </Area>\n  <Area name="SunkenGladesMainPool">\n    <Locations>\n      <Location>\n        <X>5</X>\n        <Y>-241</Y>\n        <Item>EX100</Item>\n        <Difficulty>1</Difficulty>\n        <Zone>Glades</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n    </Connections>\n  </Area>\n  <Area name="SunkenGladesMainPoolDeep">\n    <Locations>\n      <Location>\n        <X>-40</X>\n        <Y>-239</Y>\n        <Item>EC</Item>\n        <Difficulty>2</Difficulty>\n        <Zone>Glades</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n    </Connections>\n  </Area>\n  <Area name="FronkeyWalkRoof">\n    <Locations>\n      <Location>\n        <X>257</X>\n        <Y>-199</Y>\n        <Item>EX200</Item>\n        <Difficulty>1</Difficulty>\n        <Zone>Glades</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n    </Connections>\n  </Area>\n  <Area name="WallJump">\n    <Locations>\n      <Location>\n        <X>-80</X>\n        <Y>-189</Y>\n        <Item>HC</Item>\n        <Difficulty>0</Difficulty>\n        <Zone>Glades</Zone>\n      </Location>\n      <Location>\n        <X>-59</X>\n        <Y>-244</Y>\n        <Item>KS</Item>\n        <Difficulty>0</Difficulty>\n        <Zone>Glades</Zone>\n      </Location>\n      <Location>\n        <X>-316</X>\n        <Y>-308</Y>\n        <Item>SKWallJump</Item>\n        <Difficulty>0</Difficulty>\n        <Zone>Glades</Zone>\n      </Location>\n      <Location>\n        <X>-283</X>\n        <Y>-236</Y>\n        <Item>EX15</Item>\n        <Difficulty>0</Difficulty>\n        <Zone>Glades</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n      <Connection>\n        <Home name="WallJump"/>\n        <Target name="DeathGauntlet"/>\n        <Requirements>\n          <Requirement mode="dboost-light">EC+EC+EC+EC+WallJump</Requirement>\n          <Requirement mode="dboost-light">EC+EC+EC+EC+Climb</Requirement>\n          <Requirement mode="dboost-light">EC+EC+EC+EC+ChargeJump+Bash</Requirement>\n          <Requirement mode="normal">EC+EC+EC+EC+Grenade+Bash</Requirement>\n          <Requirement mode="normal">EC+EC+EC+EC+Climb+DoubleJump+Glide</Requirement>\n          <Requirement mode="normal">EC+EC+EC+EC+WallJump+DoubleJump+Glide</Requirement>\n          <Requirement mode="timed-level">EC+EC+WallJump</Requirement>\n          <Requirement mode="timed-level">EC+EC+Climb</Requirement>\n          <Requirement mode="timed-level">EC+EC+ChargeJump+Bash</Requirement>\n          <Requirement mode="timed-level">EC+EC+Grenade+Bash</Requirement>\n          <Requirement mode="lure">EC+EC+EC+EC+Bash</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="WallJump"/>\n        <Target name="AboveFourthHealth"/>\n        <Requirements>\n          <Requirement mode="normal">Bash+WallJump</Requirement>\n          <Requirement mode="normal">Bash+Climb</Requirement>\n          <Requirement mode="normal">ChargeJump</Requirement>\n          <Requirement mode="speed">WallJump+DoubleJump</Requirement>\n          <Requirement mode="extended">Climb+DoubleJump</Requirement>\n          <Requirement mode="dbash">Bash</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="WallJump"/>\n        <Target name="RightWallJump"/>\n        <Requirements>\n          <Requirement mode="normal">ChargeJump</Requirement>\n          <Requirement mode="normal">Bash+Grenade</Requirement>\n          <Requirement mode="lure-hard">Bash</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="WallJump"/>\n        <Target name="LeftWallJump"/>\n        <Requirements>\n          <Requirement mode="normal">WallJump</Requirement>\n          <Requirement mode="normal">Climb</Requirement>\n          <Requirement mode="normal">ChargeJump</Requirement>\n          <Requirement mode="normal">Bash+Grenade</Requirement>\n          <Requirement mode="lure-hard">Bash</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="WallJump"/>\n        <Target name="SpiritCaverns"/>\n        <Requirements>\n          <Requirement mode="normal">KS+KS+Climb</Requirement>\n          <Requirement mode="normal">KS+KS+WallJump</Requirement>\n          <Requirement mode="normal">KS+KS+ChargeJump</Requirement>\n          <Requirement mode="normal">KS+KS+Bash+Grenade</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="WallJump"/>\n        <Target name="GladesLaser"/>\n        <Requirements>\n          <Requirement mode="normal">ChargeJump+Climb</Requirement>\n          <Requirement mode="normal">ChargeJump+WallJump+DoubleJump</Requirement>\n          <Requirement mode="normal">Bash+DoubleJump+Glide</Requirement>\n          <Requirement mode="normal">Bash+DoubleJump+WallJump</Requirement>\n          <Requirement mode="normal">Bash+DoubleJump+Climb</Requirement>\n          <Requirement mode="normal">Bash+Grenade+Climb</Requirement>\n          <Requirement mode="normal">Bash+Grenade+WallJump</Requirement>\n          <Requirement mode="extended">Bash+WallJump</Requirement>\n          <Requirement mode="extended">Bash+Climb</Requirement>\n          <Requirement mode="dbash">Bash</Requirement>\n          <Requirement mode="cdash-farming">Dash</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="WallJump"/>\n        <Target name="ChargeFlame"/>\n        <Requirements>\n          <Requirement mode="normal">WallJump+Grenade</Requirement>\n          <Requirement mode="normal">WallJump+ChargeFlame</Requirement>\n          <Requirement mode="normal">Climb+Grenade</Requirement>\n          <Requirement mode="normal">Climb+ChargeFlame</Requirement>\n          <Requirement mode="normal">ChargeJump+Grenade</Requirement>\n          <Requirement mode="normal">ChargeJump+ChargeFlame</Requirement>\n          <Requirement mode="normal">Bash+Grenade</Requirement>\n          <Requirement mode="glitched">Dash+Bash+WallJump</Requirement>\n          <Requirement mode="glitched">Dash+Bash+Climb</Requirement>\n          <Requirement mode="glitched">Dash+WallJump+DoubleJump</Requirement>\n          <Requirement mode="glitched">Dash+ChargeJump</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="WallJump"/>\n        <Target name="ChargeFlameOrb"/>\n        <Requirements>\n          <Requirement mode="normal">ChargeFlame</Requirement>\n          <Requirement mode="normal">Grenade</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="WallJump"/>\n        <Target name="WallJumpMapStone"/>\n        <Requirements>\n          <Requirement mode="normal">MS</Requirement>\n        </Requirements>\n      </Connection>\n    </Connections>\n  </Area>\n  <Area name="DeathGauntlet">\n    <Locations>\n      <Location>\n        <X>303</X>\n        <Y>-190</Y>\n        <Item>EX100</Item>\n        <Difficulty>0</Difficulty>\n        <Zone>Grove</Zone>\n      </Location>\n      <Location>\n        <X>423</X>\n        <Y>-169</Y>\n        <Item>EC</Item>\n        <Difficulty>0</Difficulty>\n        <Zone>Grotto</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n      <Connection>\n        <Home name="DeathGauntlet"/>\n        <Target name="DeathStomp"/>\n        <Requirements>\n          <Requirement mode="normal">Stomp+Water</Requirement>\n          <Requirement mode="dboost">Stomp</Requirement>\n          <Requirement mode="extended-damage">Free</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="DeathGauntlet"/>\n        <Target name="DeathGauntletRoof"/>\n        <Requirements>\n          <Requirement mode="normal">ChargeJump</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="DeathGauntlet"/>\n        <Target name="DeathWater"/>\n        <Requirements>\n          <Requirement mode="normal">Water+EC+EC+EC+EC</Requirement>\n          <Requirement mode="dboost">EC+EC+EC+EC</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="DeathGauntlet"/>\n        <Target name="MoonGrotto"/>\n        <Requirements>\n          <Requirement mode="dboost-light">WallJump</Requirement>\n          <Requirement mode="dboost-light">Climb</Requirement>\n          <Requirement mode="dboost-light">ChargeJump+Bash</Requirement>\n          <Requirement mode="normal">Grenade+Bash</Requirement>\n          <Requirement mode="normal">Climb+DoubleJump+Glide</Requirement>\n          <Requirement mode="normal">WallJump+DoubleJump+Glide</Requirement>\n          <Requirement mode="timed-level">WallJump</Requirement>\n          <Requirement mode="timed-level">Climb</Requirement>\n          <Requirement mode="timed-level">ChargeJump+Bash</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="DeathGauntlet"/>\n        <Target name="SunkenGladesRunaway"/>\n        <Requirements>\n          <Requirement mode="normal">DoubleJump+EC+EC+EC+EC</Requirement>\n          <Requirement mode="normal">Glide+EC+EC+EC+EC</Requirement>\n        </Requirements>\n      </Connection>\n    </Connections>\n  </Area>\n  <Area name="WallJumpMapStone">\n    <Locations>\n      <Location>\n        <X>-81</X>\n        <Y>-248</Y>\n        <Item>MapStone</Item>\n        <Difficulty>0</Difficulty>\n        <Zone>Glades</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n    </Connections>\n  </Area>\n  <Area name="AboveFourthHealth">\n    <Locations>\n      <Location>\n        <X>-48</X>\n        <Y>-166</Y>\n        <Item>AC</Item>\n        <Difficulty>1</Difficulty>\n        <Zone>Glades</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n    </Connections>\n  </Area>\n  <Area name="RightWallJump">\n    <Locations>\n      <Location>\n        <X>-245</X>\n        <Y>-277</Y>\n        <Item>EX200</Item>\n        <Difficulty>2</Difficulty>\n        <Zone>Glades</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n    </Connections>\n  </Area>\n  <Area name="LeftWallJump">\n    <Locations>\n      <Location>\n        <X>-336</X>\n        <Y>-288</Y>\n        <Item>EC</Item>\n        <Difficulty>0</Difficulty>\n        <Zone>Glades</Zone>\n      </Location>\n      <Location>\n        <X>-247</X>\n        <Y>-207</Y>\n        <Item>EX15</Item>\n        <Difficulty>0</Difficulty>\n        <Zone>Glades</Zone>\n      </Location>\n      <Location>\n        <X>-238</X>\n        <Y>-212</Y>\n        <Item>KS</Item>\n        <Difficulty>0</Difficulty>\n        <Zone>Glades</Zone>\n      </Location>\n      <Location>\n        <X>-184</X>\n        <Y>-227</Y>\n        <Item>MS</Item>\n        <Difficulty>0</Difficulty>\n        <Zone>Glades</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n    </Connections>\n  </Area>\n  <Area name="SpiritCaverns">\n    <Locations>\n      <Location>\n        <X>-182</X>\n        <Y>-193</Y>\n        <Item>KS</Item>\n        <Difficulty>0</Difficulty>\n        <Zone>Glades</Zone>\n      </Location>\n      <Location>\n        <X>-217</X>\n        <Y>-183</Y>\n        <Item>KS</Item>\n        <Difficulty>0</Difficulty>\n        <Zone>Glades</Zone>\n      </Location>\n      <Location>\n        <X>-177</X>\n        <Y>-154</Y>\n        <Item>KS</Item>\n        <Difficulty>0</Difficulty>\n        <Zone>Glades</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n      <Connection>\n        <Home name="SpiritCaverns"/>\n        <Target name="SpiritCavernsTopLeft"/>\n        <Requirements>\n          <Requirement mode="normal">WallJump</Requirement>\n          <Requirement mode="normal">DoubleJump</Requirement>\n          <Requirement mode="dboost-light">ChargeJump</Requirement>\n          <Requirement mode="dboost-light">Bash</Requirement>\n          <Requirement mode="extreme">Climb</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="SpiritCaverns"/>\n        <Target name="GladesLaser"/>\n        <Requirements>\n          <Requirement mode="normal">EC+EC+EC+EC+DoubleJump</Requirement>\n          <Requirement mode="normal">EC+EC+EC+EC+Bash</Requirement>\n          <Requirement mode="normal">EC+EC+EC+EC+ChargeJump</Requirement>\n          <Requirement mode="cdash-farming">EC+EC+EC+EC+Dash</Requirement>\n          <Requirement mode="extended-damage">EC+EC+EC+EC+WallJump+Glide</Requirement>\n          <Requirement mode="glitched">EC+EC+EC+DoubleJump</Requirement>\n          <Requirement mode="glitched">EC+EC+EC+Bash</Requirement>\n          <Requirement mode="glitched">EC+EC+EC+ChargeJump</Requirement>\n          <Requirement mode="glitched">EC+EC+EC+Dash</Requirement>\n          <Requirement mode="glitched">EC+EC+EC+WallJump+Glide</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="SpiritCaverns"/>\n        <Target name="SpiritCavernsAC"/>\n        <Requirements>\n          <Requirement mode="speed">WallJump+DoubleJump</Requirement>\n          <Requirement mode="normal">ChargeJump</Requirement>\n          <Requirement mode="normal">Bash</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="SpiritCaverns"/>\n        <Target name="SpiritTreeRefined"/>\n        <Requirements>\n          <!-- will cause some painted-into-corner scenarios, revisit this if it is too much -->\n          <Requirement mode="normal">KS+KS+KS+KS</Requirement>\n        </Requirements>\n      </Connection>\n    </Connections>\n  </Area>\n  <Area name="SpiritCavernsTopLeft">\n    <Locations>\n      <Location>\n        <X>-217</X>\n        <Y>-146</Y>\n        <Item>KS</Item>\n        <Difficulty>0</Difficulty>\n        <Zone>Glades</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n    </Connections>\n  </Area>\n  <Area name="SpiritCavernsAC">\n    <Locations>\n      <Location>\n        <X>-216</X>\n        <Y>-176</Y>\n        <Item>AC</Item>\n        <Difficulty>1</Difficulty>\n        <Zone>Glades</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n    </Connections>\n  </Area>\n  <Area name="GladesLaser">\n    <Locations>\n      <Location>\n        <X>-155</X>\n        <Y>-186</Y>\n        <Item>EC</Item>\n        <Difficulty>2</Difficulty>\n        <Zone>Glades</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n      <Connection>\n        <Home name="GladesLaser"/>\n        <Target name="WallJump"/>\n        <Requirements>\n          <Requirement mode="normal">Free</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="GladesLaser"/>\n        <Target name="SpiritCaverns"/>\n        <Requirements>\n          <Requirement mode="normal">EC+EC+EC+EC</Requirement>\n          <Requirement mode="timed-level">EC+EC</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="GladesLaser"/>\n        <Target name="GladesLaserGrenade"/>\n        <Requirements>\n          <Requirement mode="normal">Grenade+Bash+WallJump</Requirement>\n          <Requirement mode="normal">Grenade+Bash+Climb</Requirement>\n          <Requirement mode="extended">Grenade+ChargeJump+Water</Requirement>\n          <Requirement mode="extended-damage">Grenade+ChargeJump</Requirement>\n          <Requirement mode="cdash">Grenade+Dash</Requirement>\n        </Requirements>\n      </Connection>\n    </Connections>\n  </Area>\n  <Area name="GladesLaserGrenade">\n    <Locations>\n      <Location>\n        <X>-165</X>\n        <Y>-140</Y>\n        <Item>AC</Item>\n        <Difficulty>3</Difficulty>\n        <Zone>Glades</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n    </Connections>\n  </Area>\n  <Area name="ChargeFlame">\n    <Locations>\n      <Location>\n        <X>-56</X>\n        <Y>-160</Y>\n        <Item>SKChargeFlame</Item>\n        <Difficulty>0</Difficulty>\n        <Zone>Grove</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n      <Connection>\n        <Home name="ChargeFlame"/>\n        <Target name="SpiritTreeRefined"/>\n        <Requirements>\n          <Requirement mode="normal">ChargeJump+ChargeFlame</Requirement>\n          <Requirement mode="normal">ChargeJump+Grenade</Requirement>\n          <Requirement mode="speed">ChargeJump+Stomp</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="ChargeFlame"/>\n        <Target name="ChargeFlamePlant"/>\n        <Requirements>\n          <Requirement mode="normal">ChargeFlame</Requirement>\n          <Requirement mode="normal">Grenade</Requirement>\n          <Requirement mode="cdash-farming">Dash</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="ChargeFlame"/>\n        <Target name="WallJump"/>\n        <Requirements>\n          <Requirement mode="normal">ChargeFlame</Requirement>\n          <Requirement mode="normal">Grenade</Requirement>\n          <Requirement mode="normal">Stomp+WallJump</Requirement>\n          <Requirement mode="normal">Stomp+Climb</Requirement>\n          <Requirement mode="normal">Stomp+DoubleJump</Requirement>\n          <Requirement mode="normal">Stomp+ChargeJump</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="ChargeFlame"/>\n        <Target name="ChargeFlameOrb"/>\n        <Requirements>\n          <Requirement mode="normal">Free</Requirement>\n        </Requirements>\n      </Connection>\n    </Connections>\n  </Area>\n  <Area name="ChargeFlamePlant">\n    <Locations>\n      <Location>\n        <X>43</X>\n        <Y>-156</Y>\n        <Item>Plant</Item>\n        <Difficulty>1</Difficulty>\n        <Zone>Grove</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n    </Connections>\n  </Area>\n  <Area name="ChargeFlameOrb">\n    <Locations>\n      <Location>\n        <X>4</X>\n        <Y>-196</Y>\n        <Item>EX100</Item>\n        <Difficulty>0</Difficulty>\n        <Zone>Glades</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n    </Connections>\n  </Area>\n  <Area name="SpiritTreeRefined">\n    <Locations>\n    </Locations>\n    <Connections>\n      <Connection>\n        <Home name="SpiritTreeRefined"/>\n        <Target name="ChargeFlame"/>\n        <Requirements>\n          <Requirement mode="normal">Free</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="SpiritTreeRefined"/>\n        <Target name="ValleyEntry"/>\n        <Requirements>\n          <Requirement mode="normal">ChargeFlame</Requirement>\n          <Requirement mode="normal">Grenade</Requirement>\n          <Requirement mode="normal">Stomp+WallJump</Requirement>\n          <Requirement mode="normal">Stomp+Climb</Requirement>\n          <Requirement mode="normal">Stomp+DoubleJump</Requirement>\n          <Requirement mode="normal">Stomp+ChargeJump</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="SpiritTreeRefined"/>\n        <Target name="ChargeFlameTree"/>\n        <Requirements>\n          <Requirement mode="normal">DoubleJump+Climb</Requirement>\n          <Requirement mode="normal">DoubleJump+WallJump</Requirement>\n          <Requirement mode="normal">ChargeJump+Climb</Requirement>\n          <Requirement mode="normal">ChargeJump+WallJump</Requirement>\n          <Requirement mode="normal">ChargeJump+DoubleJump</Requirement>\n          <Requirement mode="normal">ChargeJump+Glide</Requirement>\n          <Requirement mode="normal">Bash+Grenade</Requirement>\n          <Requirement mode="speed">Dash+WallJump</Requirement>\n          <Requirement mode="speed">Dash+Climb</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="SpiritTreeRefined"/>\n        <Target name="SpiderSac"/>\n        <Requirements>\n          <Requirement mode="normal">ChargeFlame+WallJump</Requirement>\n          <Requirement mode="normal">ChargeFlame+ChargeJump</Requirement>\n          <Requirement mode="normal">ChargeFlame+Climb+DoubleJump</Requirement>\n          <Requirement mode="normal">ChargeFlame+Climb+Glide</Requirement>\n          <Requirement mode="normal">ChargeFlame+Climb+Dash</Requirement>\n          <Requirement mode="normal">Grenade+WallJump</Requirement>\n          <Requirement mode="normal">Grenade+ChargeJump</Requirement>\n          <Requirement mode="normal">Grenade+Climb+DoubleJump</Requirement>\n          <Requirement mode="normal">Grenade+Climb+Glide</Requirement>\n          <Requirement mode="normal">Grenade+Climb+Dash</Requirement>\n          <Requirement mode="normal">Grenade+Bash</Requirement>\n          <Requirement mode="extended">ChargeFlame+Climb</Requirement>\n          <Requirement mode="extended">Grenade+Climb</Requirement>\n        </Requirements>\n      </Connection>\n    </Connections>\n  </Area>\n  <Area name="ChargeFlameTree">\n    <Locations>\n      <Location>\n        <X>-14</X>\n        <Y>-95</Y>\n        <Item>EX100</Item>\n        <Difficulty>1</Difficulty>\n        <Zone>Grove</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n    </Connections>\n  </Area>\n  <Area name="SpiderSac">\n    <Locations>\n    </Locations>\n    <Connections>\n      <Connection>\n        <Home name="SpiderSac"/>\n        <Target name="SpiderSacHealth"/>\n        <Requirements>\n          <Requirement mode="normal">Grenade</Requirement>\n          <Requirement mode="normal">ChargeFlame</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="SpiderSac"/>\n        <Target name="SpiderSacEnergy"/>\n        <Requirements>\n          <Requirement mode="normal">Grenade</Requirement>\n          <Requirement mode="normal">ChargeFlame</Requirement>\n          <Requirement mode="normal">DoubleJump</Requirement>\n          <Requirement mode="normal">Glide</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="SpiderSac"/>\n        <Target name="SpiderSacGrenadeDoor"/>\n        <Requirements>\n          <Requirement mode="normal">Grenade+Bash</Requirement>\n          <Requirement mode="normal">Grenade+DoubleJump+WallJump</Requirement>\n          <Requirement mode="normal">Grenade+ChargeJump</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="SpiderSac"/>\n        <Target name="SpiderSacEnergyDoor"/>\n        <Requirements>\n          <Requirement mode="normal">EC+EC+EC+EC</Requirement>\n          <!-- you can level up with the spider exp -->\n          <Requirement mode="timed-level">EC+EC</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="SpiderSac"/>\n        <Target name="HollowGrove"/>\n        <Requirements>\n          <Requirement mode="normal">Grenade</Requirement>\n          <Requirement mode="normal">ChargeFlame</Requirement>\n          <Requirement mode="normal">DoubleJump</Requirement>\n          <Requirement mode="normal">Glide</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="SpiderSac"/>\n        <Target name="DeathGauntletRoof"/>\n        <Requirements>\n          <Requirement mode="normal">Stomp+Water</Requirement>\n          <Requirement mode="dboost">Stomp+Bash+HC+HC+HC+HC</Requirement>\n          <Requirement mode="dboost">Stomp+HC+HC+HC+HC+HC</Requirement>\n          <Requirement mode="extreme">Stomp</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="SpiderSac"/>\n        <Target name="SpiritTreeRefined"/>\n        <Requirements>\n          <Requirement mode="normal">ChargeFlame+WallJump</Requirement>\n          <Requirement mode="normal">ChargeFlame+Climb</Requirement>\n          <Requirement mode="normal">ChargeFlame+ChargeJump</Requirement>\n          <Requirement mode="normal">Grenade+WallJump</Requirement>\n          <Requirement mode="normal">Grenade+Climb</Requirement>\n          <Requirement mode="normal">Grenade+ChargeJump</Requirement>\n          <Requirement mode="normal">Stomp+WallJump</Requirement>\n          <Requirement mode="normal">Stomp+Climb</Requirement>\n          <Requirement mode="normal">Stomp+ChargeJump</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="SpiderSac"/>\n        <Target name="ChargeFlameTree"/>\n        <Requirements>\n          <Requirement mode="extended">ChargeFlame+Glide</Requirement>\n          <Requirement mode="extended">Grenade+Glide</Requirement>\n          <Requirement mode="extended">Stomp+Glide</Requirement>\n        </Requirements>\n      </Connection>\n    </Connections>\n  </Area>\n  <Area name="SpiderSacEnergyDoor">\n    <Locations>\n      <Location>\n        <X>64</X>\n        <Y>-109</Y>\n        <Item>AC</Item>\n        <Difficulty>1</Difficulty>\n        <Zone>Grove</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n    </Connections>\n  </Area>\n  <Area name="SpiderSacHealth">\n    <Locations>\n      <Location>\n        <X>151</X>\n        <Y>-117</Y>\n        <Item>HC</Item>\n        <Difficulty>1</Difficulty>\n        <Zone>Grove</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n    </Connections>\n  </Area>\n  <Area name="SpiderSacEnergy">\n    <Locations>\n      <Location>\n        <X>60</X>\n        <Y>-155</Y>\n        <Item>EC</Item>\n        <Difficulty>0</Difficulty>\n        <Zone>Grove</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n    </Connections>\n  </Area>\n  <Area name="SpiderSacGrenadeDoor">\n    <Locations>\n      <Location>\n        <X>93</X>\n        <Y>-92</Y>\n        <Item>AC</Item>\n        <Difficulty>2</Difficulty>\n        <Zone>Grove</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n    </Connections>\n  </Area>\n  <Area name="DashArea">\n    <Locations>\n      <Location>\n        <X>154</X>\n        <Y>-291</Y>\n        <Item>EX100</Item>\n        <Difficulty>1</Difficulty>\n        <Zone>Blackroot</Zone>\n      </Location>\n      <Location>\n        <X>183</X>\n        <Y>-291</Y>\n        <Item>AC</Item>\n        <Difficulty>1</Difficulty>\n        <Zone>Blackroot</Zone>\n      </Location>\n      <Location>\n        <X>197</X>\n        <Y>-229</Y>\n        <Item>EX100</Item>\n        <Difficulty>0</Difficulty>\n        <Zone>Blackroot</Zone>\n      </Location>\n      <Location>\n        <X>292</X>\n        <Y>-256</Y>\n        <Item>SKDash</Item>\n        <Difficulty>0</Difficulty>\n        <Zone>Blackroot</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n      <Connection>\n        <Home name="DashArea"/>\n        <Target name="DeathGauntlet"/>\n        <Requirements>\n          <Requirement mode="dboost-light">EC+EC+EC+EC+WallJump</Requirement>\n          <Requirement mode="dboost-light">EC+EC+EC+EC+Climb</Requirement>\n          <Requirement mode="dboost-light">EC+EC+EC+EC+ChargeJump+Bash</Requirement>\n          <Requirement mode="normal">EC+EC+EC+EC+Grenade+Bash</Requirement>\n          <Requirement mode="normal">EC+EC+EC+EC+Climb+DoubleJump+Glide</Requirement>\n          <Requirement mode="normal">EC+EC+EC+EC+WallJump+DoubleJump+Glide</Requirement>\n          <Requirement mode="timed-level">EC+EC+WallJump</Requirement>\n          <Requirement mode="timed-level">EC+EC+Climb</Requirement>\n          <Requirement mode="timed-level">EC+EC+ChargeJump+Bash</Requirement>\n          <Requirement mode="timed-level">EC+EC+Grenade+Bash</Requirement>\n          <Requirement mode="lure">EC+EC+EC+EC+Bash</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="DashArea"/>\n        <Target name="LowerBlackRoot"/>\n        <Requirements>\n          <Requirement mode="normal">Stomp+ChargeJump</Requirement>\n          <Requirement mode="normal">Stomp+Grenade+Bash</Requirement>\n          <Requirement mode="normal">Stomp+Dash+DoubleJump</Requirement>\n          <Requirement mode="normal">Stomp+Dash+Grenade+Bash</Requirement>\n          <Requirement mode="normal">Stomp+Dash</Requirement>\n          <Requirement mode="normal">Stomp+ChargeJump+DoubleJump</Requirement>\n          <Requirement mode="normal">Stomp+Grenade</Requirement>\n          <Requirement mode="normal">Stomp+Grenade+Water</Requirement>\n          <Requirement mode="timed-level">Stomp</Requirement>\n          <Requirement mode="extended">Stomp</Requirement>\n          <Requirement mode="extended">ChargeJump+Climb</Requirement>\n          <Requirement mode="extreme">Bash</Requirement>\n          <Requirement mode="glitched">Free</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="DashArea"/>\n        <Target name="RazielNo"/>\n        <Requirements>\n          <Requirement mode="normal">Dash+WallJump</Requirement>\n          <Requirement mode="normal">Dash+ChargeJump</Requirement>\n          <Requirement mode="normal">Dash+Bash+Grenade</Requirement>\n          <Requirement mode="normal">Dash+Climb+DoubleJump</Requirement>\n          <Requirement mode="speed">WallJump</Requirement>\n          <Requirement mode="speed">ChargeJump</Requirement>\n          <Requirement mode="speed">Bash+Grenade</Requirement>\n          <Requirement mode="speed">Climb+DoubleJump</Requirement>\n          <Requirement mode="extended">Dash</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="DashArea"/>\n        <Target name="BlackrootMap"/>\n        <Requirements>\n          <Requirement mode="normal">Dash</Requirement>\n          <Requirement mode="extended">Free</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="DashArea"/>\n        <Target name="DashAreaPlant"/>\n        <Requirements>\n          <Requirement mode="normal">ChargeJump+Climb+ChargeFlame</Requirement>\n          <Requirement mode="normal">ChargeJump+WallJump+ChargeFlame</Requirement>\n          <Requirement mode="normal">Glide+WallJump+ChargeFlame</Requirement>\n          <Requirement mode="normal">ChargeJump+Climb+Grenade</Requirement>\n          <Requirement mode="normal">ChargeJump+WallJump+Grenade</Requirement>\n          <Requirement mode="normal">Bash+Grenade</Requirement>\n          <Requirement mode="normal">Glide+WallJump+Grenade</Requirement>\n          <Requirement mode="extended">DoubleJump+Grenade</Requirement>\n          <Requirement mode="extended">DoubleJump+ChargeFlame</Requirement>\n          <Requirement mode="cdash-farming">ChargeJump+Climb+Dash</Requirement>\n          <Requirement mode="cdash-farming">ChargeJump+WallJump+Dash</Requirement>\n          <Requirement mode="cdash-farming">DoubleJump+Dash</Requirement>\n        </Requirements>\n      </Connection>\n    </Connections>\n  </Area>\n  <Area name="DashAreaPlant">\n    <Locations>\n      <Location>\n        <X>313</X>\n        <Y>-232</Y>\n        <Item>Plant</Item>\n        <Difficulty>2</Difficulty>\n        <Zone>Blackroot</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n    </Connections>\n  </Area>\n  <Area name="RazielNo">\n    <Locations>\n      <Location>\n        <X>304</X>\n        <Y>-303</Y>\n        <Item>EX100</Item>\n        <Difficulty>0</Difficulty>\n        <Zone>Blackroot</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n      <Connection>\n        <Home name="RazielNo"/>\n        <Target name="BoulderExp"/>\n        <Requirements>\n          <Requirement mode="normal">Dash+Stomp</Requirement>\n          <Requirement mode="extended">Stomp</Requirement>\n          <Requirement mode="glitched">Free</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="RazielNo"/>\n        <Target name="BlackrootGrottoConnection"/>\n        <Requirements>\n          <Requirement mode="normal">Dash+DoubleJump</Requirement>\n          <Requirement mode="normal">Dash+ChargeJump</Requirement>\n          <Requirement mode="normal">Dash+Bash+Grenade</Requirement>\n          <Requirement mode="speed">ChargeJump+Climb</Requirement>\n          <Requirement mode="speed">ChargeJump+WallJump</Requirement>\n          <Requirement mode="speed">Bash+Grenade</Requirement>\n          <Requirement mode="extended">WallJump</Requirement>\n          <Requirement mode="extended">DoubleJump</Requirement>\n          <Requirement mode="extended">Dash</Requirement>\n          <Requirement mode="glitched">Free</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="RazielNo"/>\n        <Target name="GumoHideout"/>\n        <Requirements>\n          <Requirement mode="glitched">Free</Requirement>\n        </Requirements>\n      </Connection>\n    </Connections>\n  </Area>\n  <Area name="BlackrootMap">\n    <Locations>\n      <Location>\n        <X>346</X>\n        <Y>-255</Y>\n        <Item>MS</Item>\n        <Difficulty>0</Difficulty>\n        <Zone>Blackroot</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n    </Connections>\n  </Area>\n  <Area name="BlackrootGrottoConnection">\n    <Locations>\n      <Location>\n        <X>394</X>\n        <Y>-309</Y>\n        <Item>HC</Item>\n        <Difficulty>0</Difficulty>\n        <Zone>Blackroot</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n      <Connection>\n        <Home name="BlackrootGrottoConnection"/>\n        <Target name="SideFallCell"/>\n        <Requirements>\n          <Requirement mode="normal">Stomp</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="BlackrootGrottoConnection"/>\n        <Target name="BlackrootMapStone"/>\n        <Requirements>\n          <Requirement mode="normal">MS</Requirement>\n        </Requirements>\n      </Connection>\n    </Connections>\n  </Area>\n  <Area name="BlackrootMapStone">\n    <Locations>\n      <Location>\n        <X>418</X>\n        <Y>-291</Y>\n        <Item>MapStone</Item>\n        <Difficulty>0</Difficulty>\n        <Zone>Blackroot</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n    </Connections>\n  </Area>\n  <Area name="BoulderExp">\n    <Locations>\n      <Location>\n        <X>432</X>\n        <Y>-324</Y>\n        <Item>EX100</Item>\n        <Difficulty>1</Difficulty>\n        <Zone>Blackroot</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n    </Connections>\n  </Area>\n  <Area name="LowerBlackRoot">\n    <Locations>\n    </Locations>\n    <Connections>\n      <Connection>\n        <Home name="LowerBlackRoot"/>\n        <Target name="LowerBlackRootCell"/>\n        <Requirements>\n          <Requirement mode="normal">ChargeJump</Requirement>\n          <Requirement mode="normal">Grenade+Bash</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="LowerBlackRoot"/>\n        <Target name="FarRightBlackRoot"/>\n        <Requirements>\n          <Requirement mode="speed">Dash+DoubleJump</Requirement>\n          <Requirement mode="normal">Dash+Grenade+Bash</Requirement>\n          <Requirement mode="extended">DoubleJump</Requirement>\n          <Requirement mode="extended">Grenade+Bash</Requirement>\n          <!-- for extended mode, this and the right blackroot connection can be done without dash, using a laser crouch -->\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="LowerBlackRoot"/>\n        <Target name="RightBlackRoot"/>\n        <Requirements>\n          <Requirement mode="normal">Dash</Requirement>\n          <Requirement mode="extended">Free</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="LowerBlackRoot"/>\n        <Target name="LeftBlackRoot"/>\n        <Requirements>\n          <Requirement mode="speed">ChargeJump+DoubleJump</Requirement>\n          <Requirement mode="normal">Grenade</Requirement>\n           <Requirement mode="timed-level">Free</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="LowerBlackRoot"/>\n        <Target name="BottomBlackRoot"/>\n        <Requirements>\n          <Requirement mode="normal">Grenade</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="LowerBlackRoot"/>\n        <Target name="GrenadeArea"/>\n        <Requirements>\n          <Requirement mode="normal">Dash</Requirement>\n          <Requirement mode="extended">ChargeJump+Climb+Grenade</Requirement>\n          <Requirement mode="extended">Bash+Grenade</Requirement>\n          <Requirement mode="extended">DoubleJump</Requirement>\n          <Requirement mode="glitched">Free</Requirement>\n        </Requirements>\n      </Connection>\n    </Connections>\n  </Area>\n  <Area name="GrenadeArea">\n    <Locations>\n      <Location>\n        <X>72</X>\n        <Y>-380</Y>\n        <Item>SKGrenade</Item>\n        <Difficulty>2</Difficulty>\n        <Zone>Blackroot</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n      <Connection>\n        <Home name="GrenadeArea"/>\n        <Target name="RightGrenadeArea"/>\n        <Requirements>\n          <Requirement mode="normal">Bash</Requirement>\n          <Requirement mode="normal">ChargeJump</Requirement>\n          <Requirement mode="normal">DoubleJump</Requirement>\n          <Requirement mode="normal">Glide</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="GrenadeArea"/>\n        <Target name="UpperGrenadeArea"/>\n        <Requirements>\n          <Requirement mode="normal">Grenade+Bash</Requirement>\n          <Requirement mode="normal">Grenade+ChargeJump</Requirement>\n        </Requirements>\n      </Connection>\n    </Connections>\n  </Area>\n  <Area name="RightGrenadeArea">\n    <Locations>\n      <Location>\n        <X>224</X>\n        <Y>-359</Y>\n        <Item>EX100</Item>\n        <Difficulty>2</Difficulty>\n        <Zone>Blackroot</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n    </Connections>\n  </Area>\n  <Area name="UpperGrenadeArea">\n    <Locations>\n      <Location>\n        <X>252</X>\n        <Y>-331</Y>\n        <Item>AC</Item>\n        <Difficulty>3</Difficulty>\n        <Zone>Blackroot</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n    </Connections>\n  </Area>\n  <Area name="LowerBlackRootCell">\n    <Locations>\n      <Location>\n        <X>279</X>\n        <Y>-375</Y>\n        <Item>AC</Item>\n        <Difficulty>1</Difficulty>\n        <Zone>Blackroot</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n    </Connections>\n  </Area>\n  <Area name="FarRightBlackRoot">\n    <Locations>\n      <Location>\n        <X>391</X>\n        <Y>-423</Y>\n        <Item>AC</Item>\n        <Difficulty>2</Difficulty>\n        <Zone>Blackroot</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n    </Connections>\n  </Area>\n  <Area name="RightBlackRoot">\n    <Locations>\n      <Location>\n        <X>339</X>\n        <Y>-418</Y>\n        <Item>EX100</Item>\n        <Difficulty>2</Difficulty>\n        <Zone>Blackroot</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n    </Connections>\n  </Area>\n  <Area name="LeftBlackRoot">\n    <Locations>\n      <Location>\n        <X>208</X>\n        <Y>-431</Y>\n        <Item>AC</Item>\n        <Difficulty>3</Difficulty>\n        <Zone>Blackroot</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n    </Connections>\n  </Area>\n  <Area name="BottomBlackRoot">\n    <Locations>\n    </Locations>\n    <Connections>\n      <Connection>\n        <Home name="BottomBlackRoot"/>\n        <Target name="FinalBlackRoot"/>\n        <Requirements>\n          <Requirement mode="normal">Bash+Grenade</Requirement>\n          <Requirement mode="extended-damage">Grenade+ChargeJump+Dash+HC+HC+HC+HC+HC</Requirement>\n          <Requirement mode="extended-damage">Grenade+ChargeJump+Glide+HC+HC+HC+HC+HC</Requirement>\n          <Requirement mode="extended-damage">Grenade+ChargeJump+DoubleJump</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="BottomBlackRoot"/>\n        <Target name="BlackRootWater"/>\n        <Requirements>\n          <Requirement mode="normal">Water</Requirement>\n          <Requirement mode="dboost-hard">HC+HC+HC+HC+HC+HC+HC+HC+HC+HC+HC+HC</Requirement>\n          <Requirement mode="extreme">HC+HC+HC+HC+HC+HC</Requirement>\n        </Requirements>\n      </Connection>\n    </Connections>\n  </Area>\n  <Area name="FinalBlackRoot">\n    <Locations>\n      <Location>\n        <X>459</X>\n        <Y>-506</Y>\n        <Item>AC</Item>\n        <Difficulty>4</Difficulty>\n        <Zone>Blackroot</Zone>\n      </Location>\n      <Location>\n        <X>462</X>\n        <Y>-489</Y>\n        <Item>EX100</Item>\n        <Difficulty>4</Difficulty>\n        <Zone>Blackroot</Zone>\n      </Location>\n      <Location>\n        <X>307</X>\n        <Y>-525</Y>\n        <Item>EX100</Item>\n        <Difficulty>4</Difficulty>\n        <Zone>Blackroot</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n    </Connections>\n  </Area>\n  <Area name="BlackRootWater">\n    <Locations>\n      <Location>\n        <X>527</X>\n        <Y>-544</Y>\n        <Item>AC</Item>\n        <Difficulty>4</Difficulty>\n        <Zone>Blackroot</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n    </Connections>\n  </Area>\n  <Area name="HollowGrove">\n    <Locations>\n      <Location>\n        <X>300</X>\n        <Y>-94</Y>\n        <Item>MS</Item>\n        <Difficulty>0</Difficulty>\n        <Zone>Grove</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n      <Connection>\n        <Home name="HollowGrove"/>\n        <Target name="MoonGrotto"/>\n        <Requirements>\n          <Requirement mode="normal">WallJump</Requirement>\n          <Requirement mode="normal">Climb</Requirement>\n          <Requirement mode="normal">ChargeJump</Requirement>\n          <Requirement mode="normal">Bash+Grenade</Requirement>\n          <Requirement mode="normal">Wind+Glide</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="HollowGrove"/>\n        <Target name="DeathGauntlet"/>\n        <Requirements>\n          <Requirement mode="normal">WallJump</Requirement>\n          <Requirement mode="normal">Climb</Requirement>\n          <Requirement mode="normal">ChargeJump</Requirement>\n          <Requirement mode="normal">Bash+Grenade</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="HollowGrove"/>\n        <Target name="DeathGauntletRoof"/>\n        <Requirements>\n          <Requirement mode="normal">ChargeJump</Requirement>\n          <Requirement mode="normal">WallJump+Stomp+Water</Requirement>\n          <Requirement mode="normal">Climb+Stomp+Water</Requirement>\n          <Requirement mode="normal">Bash+Stomp+Water</Requirement>\n          <Requirement mode="dboost">Stomp+Bash+HC+HC+HC+HC</Requirement>\n          <Requirement mode="dboost">WallJump+Stomp+HC+HC+HC+HC+HC</Requirement>\n          <Requirement mode="dboost">Climb+Stomp+HC+HC+HC+HC+HC</Requirement>\n          <Requirement mode="extreme">WallJump+Stomp</Requirement>\n          <Requirement mode="extreme">Climb+Stomp</Requirement>\n          <Requirement mode="extreme">WallJump+Bash</Requirement>\n          <Requirement mode="extreme">Climb+Bash</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="HollowGrove"/>\n        <Target name="SpiderSac"/>\n        <Requirements>\n          <Requirement mode="normal">WallJump+Bash</Requirement>\n          <Requirement mode="normal">Climb+Bash</Requirement>\n          <Requirement mode="normal">WallJump+DoubleJump</Requirement>\n          <Requirement mode="normal">Climb+DoubleJump</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="HollowGrove"/>\n        <Target name="GroveWater"/>\n        <Requirements>\n          <Requirement mode="normal">Water</Requirement>\n          <Requirement mode="dboost">HC+HC+HC+HC+HC+HC</Requirement>\n          <Requirement mode="dboost">HC+HC+HC+HC+HC+Bash</Requirement>\n          <Requirement mode="extreme">Bash</Requirement>\n          <Requirement mode="extreme">HC+HC+HC+HC</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="HollowGrove"/>\n        <Target name="UpperGroveSpiderArea"/>\n        <Requirements>\n          <Requirement mode="normal">Bash+WallJump</Requirement>\n          <Requirement mode="normal">ChargeJump+WallJump+DoubleJump</Requirement>\n          <Requirement mode="dbash">Bash</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="HollowGrove"/>\n        <Target name="LeftGinsoCell"/>\n        <Requirements>\n          <Requirement mode="normal">ChargeJump+DoubleJump+Glide</Requirement>\n          <Requirement mode="normal">Wind+Glide</Requirement>\n          <Requirement mode="extended">Grenade+Bash</Requirement>\n          <Requirement mode="cdash-farming">Dash</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="HollowGrove"/>\n        <Target name="GroveWaterStomp"/>\n        <Requirements>\n          <Requirement mode="normal">Water+Stomp</Requirement>\n          <Requirement mode="dboost">Stomp+HC+HC+HC+HC+HC</Requirement>\n          <Requirement mode="lure-hard">Bash+Water</Requirement>\n          <Requirement mode="lure-hard">Bash+HC+HC+HC+HC+HC</Requirement>\n          <Requirement mode="extreme">Stomp</Requirement>\n          <Requirement mode="extreme">Bash</Requirement>\n          <Requirement mode="glitched">Bash</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="HollowGrove"/>\n        <Target name="RightGinsoOrb"/>\n        <Requirements>\n          <Requirement mode="normal">Grenade+WallJump</Requirement>\n          <Requirement mode="normal">Grenade+Climb</Requirement>\n          <Requirement mode="normal">Grenade+ChargeJump</Requirement>\n          <Requirement mode="normal">Grenade+Bash</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="HollowGrove"/>\n        <Target name="MortarCell"/>\n        <Requirements>\n          <Requirement mode="normal">ChargeJump</Requirement>\n          <Requirement mode="normal">Climb+Bash</Requirement>\n          <Requirement mode="normal">WallJump+Bash</Requirement>\n          <Requirement mode="lure-hard">Bash</Requirement>\n          <Requirement mode="extreme">WallJump+DoubleJump</Requirement>\n          <Requirement mode="glitched">Free</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="HollowGrove"/>\n        <Target name="GinsoOuterDoor"/>\n        <Requirements>\n          <Requirement mode="normal">GinsoKey</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="HollowGrove"/>\n        <Target name="HoruFields"/>\n        <Requirements>\n          <Requirement mode="normal">Bash+DoubleJump</Requirement>\n          <Requirement mode="normal">Bash+Glide</Requirement>\n          <Requirement mode="normal">Stomp+ChargeJump+Glide+WallJump</Requirement>\n          <Requirement mode="normal">Stomp+ChargeJump+Glide+Climb</Requirement>\n          <Requirement mode="dbash">Bash</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="HollowGrove"/>\n        <Target name="HoruFieldsStomp"/>\n        <Requirements>\n          <Requirement mode="normal">Stomp</Requirement>\n          <Requirement mode="lure">Free</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="HollowGrove"/>\n        <Target name="HollowGroveMapStone"/>\n        <Requirements>\n          <Requirement mode="normal">MS</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="HollowGrove"/>\n        <Target name="HollowGrovePlants"/>\n        <Requirements>\n          <Requirement mode="normal">ChargeFlame</Requirement>\n          <Requirement mode="normal">Grenade</Requirement>\n          <Requirement mode="cdash-farming">Dash</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="HollowGrove"/>\n        <Target name="HollowGroveTree"/>\n        <Requirements>\n          <Requirement mode="normal">WallJump+DoubleJump</Requirement>\n          <Requirement mode="normal">Wind+Glide</Requirement>\n          <Requirement mode="normal">ChargeJump</Requirement>\n          <Requirement mode="normal">Bash+Grenade</Requirement>\n          <Requirement mode="lure">Bash+WallJump</Requirement>\n          <Requirement mode="lure">Bash+Climb</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="HollowGrove"/>\n        <Target name="RightGinso"/>\n        <Requirements>\n          <Requirement mode="normal">WallJump</Requirement>\n          <Requirement mode="normal">Climb</Requirement>\n          <Requirement mode="normal">Wind+Glide</Requirement>\n          <Requirement mode="normal">ChargeJump</Requirement>\n          <Requirement mode="normal">Bash+Grenade</Requirement>\n        </Requirements>\n      </Connection>\n    </Connections>\n  </Area>\n  <Area name="GinsoOuterDoor">\n    <Locations>\n    </Locations>\n    <Connections>\n      <Connection>\n        <Entrance/>\n        <Home name="GinsoOuterDoor"/>\n        <Target name="GinsoInnerDoor"/>\n        <Requirements>\n          <Requirement mode="normal">Free</Requirement>\n        </Requirements>\n      </Connection>\n    </Connections>\n  </Area>\n  <Area name="GinsoInnerDoor">\n    <Locations>\n    </Locations>\n    <Connections>\n      <Connection>\n        <Home name="GinsoInnerDoor"/>\n        <Target name="LowerGinsoTree"/>\n        <Requirements>\n          <Requirement mode="normal">WallJump+DoubleJump</Requirement>\n          <Requirement mode="normal">ChargeJump</Requirement>\n          <Requirement mode="normal">Bash+Grenade</Requirement>\n        </Requirements>\n      </Connection>\n    </Connections>\n  </Area>\n  <Area name="RightGinso">\n    <Locations>\n      <Location>\n        <X>703</X>\n        <Y>-82</Y>\n        <Item>AC</Item>\n        <Difficulty>0</Difficulty>\n        <Zone>Swamp</Zone>\n      </Location>\n      <Location>\n        <X>618</X>\n        <Y>-98</Y>\n        <Item>EX100</Item>\n        <Difficulty>0</Difficulty>\n        <Zone>Swamp</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n    </Connections>\n  </Area>\n  <Area name="MoonGrotto">\n    <Locations>\n    </Locations>\n    <Connections>\n      <Connection>\n        <Home name="MoonGrotto"/>\n        <Target name="HollowGrove"/>\n        <Requirements>\n          <Requirement mode="normal">ChargeJump+WallJump</Requirement>\n          <Requirement mode="normal">ChargeJump+Climb</Requirement>\n          <Requirement mode="normal">WallJump+DoubleJump</Requirement>\n          <Requirement mode="normal">Climb+DoubleJump</Requirement>\n          <Requirement mode="normal">Grenade+Bash</Requirement>\n          <Requirement mode="extended">WallJump</Requirement>\n          <Requirement mode="extended">Climb</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="MoonGrotto"/>\n        <Target name="DeathGauntlet"/>\n        <Requirements>\n          <Requirement mode="normal">WallJump</Requirement>\n          <Requirement mode="normal">Climb</Requirement>\n          <Requirement mode="normal">ChargeJump</Requirement>\n          <Requirement mode="normal">Bash+Grenade</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="MoonGrotto"/>\n        <Target name="UpperGrottoOrbs"/>\n        <Requirements>\n          <Requirement mode="normal">WallJump+DoubleJump</Requirement>\n          <Requirement mode="normal">ChargeJump</Requirement>\n          <Requirement mode="extreme">Bash</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="MoonGrotto"/>\n        <Target name="UpperGrotto200"/>\n        <Requirements>\n          <Requirement mode="normal">WallJump+DoubleJump</Requirement>\n          <Requirement mode="normal">Climb+DoubleJump+ChargeJump</Requirement>\n          <Requirement mode="extended">Grenade+Bash</Requirement>\n          <Requirement mode="dboost">ChargeJump</Requirement>\n          <Requirement mode="extreme">Bash</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="MoonGrotto"/>\n        <Target name="SwampGrottoWater"/>\n        <Requirements>\n          <Requirement mode="normal">Water</Requirement>\n          <Requirement mode="dboost">Free</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="MoonGrotto"/>\n        <Target name="Swamp"/>\n        <Requirements>\n          <Requirement mode="normal">Stomp+ChargeJump</Requirement>\n          <Requirement mode="normal">ChargeJump+ChargeFlame+WallJump</Requirement>\n          <Requirement mode="normal">ChargeJump+ChargeFlame+Climb</Requirement>\n          <Requirement mode="normal">ChargeJump+Grenade+WallJump</Requirement>\n          <Requirement mode="normal">ChargeJump+Grenade+Climb</Requirement>\n          <Requirement mode="lure">Bash+ChargeFlame+Water+WallJump</Requirement>\n          <Requirement mode="lure">Bash+ChargeFlame+Water+Climb</Requirement>\n          <Requirement mode="lure">Bash+Grenade+Water</Requirement>\n          <Requirement mode="speed-lure">Bash+Climb</Requirement>\n          <Requirement mode="speed-lure">Bash+WallJump</Requirement>\n          <Requirement mode="speed-lure">Bash+Grenade</Requirement>\n          <Requirement mode="speed-lure">Bash+ChargeJump</Requirement>\n          <Requirement mode="extended">ChargeJump+Climb</Requirement>\n          <Requirement mode="extended">DoubleJump+ChargeFlame+Dash+Water+WallJump</Requirement>\n          <Requirement mode="extended">DoubleJump+ChargeFlame+Dash+Water+Climb</Requirement>\n          <Requirement mode="extended">DoubleJump+ChargeFlame+Glide+Water+WallJump</Requirement>\n          <Requirement mode="extended">DoubleJump+ChargeFlame+Glide+Water+Climb</Requirement>\n          <Requirement mode="extended-damage">DoubleJump+ChargeFlame+Water+HC+HC+HC+HC+WallJump</Requirement>\n          <Requirement mode="extended-damage">DoubleJump+ChargeFlame+Water+HC+HC+HC+HC+Climb</Requirement>\n          <Requirement mode="extended-damage">Dash+Stomp+ChargeFlame+Water+HC+HC+HC+HC+WallJump</Requirement>\n          <Requirement mode="extended-damage">Dash+Stomp+ChargeFlame+Water+HC+HC+HC+HC+Climb</Requirement>\n          <Requirement mode="dboost-hard">DoubleJump+ChargeFlame+HC+HC+HC+HC+HC+HC+HC+HC+HC+HC+HC+HC+HC</Requirement>\n          <Requirement mode="dboost-hard">Stomp+ChargeFlame+HC+HC+HC+HC+HC+HC+HC+HC+HC+HC+HC+HC+HC+WallJump</Requirement>\n          <Requirement mode="dboost-hard">Stomp+ChargeFlame+HC+HC+HC+HC+HC+HC+HC+HC+HC+HC+HC+HC+HC+Climb</Requirement>\n          <Requirement mode="extreme">DoubleJump+ChargeFlame+HC+HC+HC+HC+HC+HC+HC</Requirement>\n          <Requirement mode="extreme">Stomp+ChargeFlame+HC+HC+HC+HC+HC+HC+HC+WallJump</Requirement>\n          <Requirement mode="extreme">Stomp+ChargeFlame+HC+HC+HC+HC+HC+HC+HC+Climb</Requirement>\n          <Requirement mode="extreme">ChargeJump+ChargeFlame</Requirement>\n          <Requirement mode="extreme">ChargeJump+Grenade</Requirement>\n          <Requirement mode="glitched">Dash</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="MoonGrotto"/>\n        <Target name="DrainExp"/>\n        <Requirements>\n          <Requirement mode="normal">Grenade+Climb+ChargeJump</Requirement>\n          <Requirement mode="speed">Grenade+Bash</Requirement>\n          <Requirement mode="extended-damage">ChargeFlame+Climb+ChargeJump</Requirement>\n          <Requirement mode="extended-damage">ChargeFlame+DoubleJump+WallJump</Requirement>\n          <Requirement mode="extended-damage">ChargeFlame+DoubleJump+Climb</Requirement>\n          <Requirement mode="dbash">ChargeFlame+Bash+WallJump</Requirement>\n          <Requirement mode="dbash">ChargeFlame+Bash+Climb</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="MoonGrotto"/>\n        <Target name="SwampEnergy"/>\n        <Requirements>\n          <Requirement mode="glitched">Dash</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="MoonGrotto"/>\n        <Target name="DrainlessCell"/>\n        <Requirements>\n          <Requirement mode="normal">Stomp+WallJump</Requirement>\n          <Requirement mode="normal">Stomp+Climb</Requirement>\n          <Requirement mode="normal">Stomp+Bash+Grenade</Requirement>\n          <Requirement mode="normal">Stomp+ChargeJump</Requirement>\n          <Requirement mode="extended">ChargeJump+Climb</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="MoonGrotto"/>\n        <Target name="RightGrottoHealth"/>\n        <Requirements>\n          <Requirement mode="normal">DoubleJump+Bash+WallJump</Requirement>\n          <Requirement mode="normal">DoubleJump+Bash+Climb</Requirement>\n          <Requirement mode="normal">DoubleJump+ChargeJump+WallJump</Requirement>\n          <Requirement mode="normal">DoubleJump+ChargeJump+Climb</Requirement>\n          <Requirement mode="normal">Glide+ChargeJump</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="MoonGrotto"/>\n        <Target name="MoonGrottoEnergyWater"/>\n        <Requirements>\n          <Requirement mode="normal">EC+EC+Water</Requirement>\n          <Requirement mode="dboost">EC+EC</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="MoonGrotto"/>\n        <Target name="MoonGrottoEnergyTop"/>\n        <Requirements>\n          <Requirement mode="normal">EC+EC+ChargeJump</Requirement>\n          <Requirement mode="normal">EC+EC+WallJump+DoubleJump</Requirement>\n          <Requirement mode="speed">EC+EC+WallJump</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="MoonGrotto"/>\n        <Target name="GumoHideout"/>\n        <Requirements>\n          <Requirement mode="normal">WallJump</Requirement>\n          <Requirement mode="normal">Climb</Requirement>\n          <Requirement mode="normal">Bash+Grenade</Requirement>\n          <Requirement mode="normal">ChargeJump</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="MoonGrotto"/>\n        <Target name="MoonGrottoAirOrb"/>\n        <Requirements>\n          <Requirement mode="normal">ChargeJump+DoubleJump</Requirement>\n          <Requirement mode="normal">Bash+WallJump</Requirement>\n          <Requirement mode="normal">Bash+Climb</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="MoonGrotto"/>\n        <Target name="SwampPlant"/>\n        <Requirements>\n          <Requirement mode="normal">ChargeFlame+WallJump</Requirement>\n          <Requirement mode="normal">ChargeFlame+Climb</Requirement>\n          <Requirement mode="normal">Grenade+WallJump</Requirement>\n          <Requirement mode="normal">Grenade+Climb</Requirement>\n          <Requirement mode="cdash">Dash+WallJump</Requirement>\n          <Requirement mode="cdash">Dash+Climb</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="MoonGrotto"/>\n        <Target name="MoonGrottoStompPlant"/>\n        <Requirements>\n          <Requirement mode="normal">Stomp+ChargeFlame</Requirement>\n          <Requirement mode="normal">Stomp+Grenade</Requirement>\n          <Requirement mode="cdash">Stomp+Dash</Requirement>\n          <Requirement mode="extended">ChargeFlame</Requirement>\n          <Requirement mode="extended">Climb+ChargeJump+Grenade</Requirement>\n          <Requirement mode="extreme">Bash+Grenade</Requirement>\n          <Requirement mode="extreme">Bash+Dash</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="MoonGrotto"/>\n        <Target name="SwampMortarPlant"/>\n        <Requirements>\n          <Requirement mode="normal">DoubleJump+ChargeFlame</Requirement>\n          <Requirement mode="normal">DoubleJump+Grenade</Requirement>\n          <Requirement mode="normal">ChargeJump+ChargeFlame</Requirement>\n          <Requirement mode="normal">ChargeJump+Grenade</Requirement>\n          <Requirement mode="normal">Bash+ChargeFlame</Requirement>\n          <Requirement mode="normal">Bash+Grenade</Requirement>\n          <Requirement mode="normal">Glide+ChargeFlame</Requirement>\n          <Requirement mode="normal">Glide+Grenade</Requirement>\n          <Requirement mode="speed">Dash+ChargeFlame</Requirement>\n          <Requirement mode="speed">Dash+Grenade</Requirement>\n          <Requirement mode="extended">Grenade</Requirement>\n          <Requirement mode="cdash">Dash</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="MoonGrotto"/>\n        <Target name="DeathGauntletRoofPlant"/>\n        <Requirements>\n          <Requirement mode="extended">ChargeFlame+DoubleJump+WallJump</Requirement>\n          <Requirement mode="extended">ChargeFlame+Bash+WallJump</Requirement>\n          <Requirement mode="extended">ChargeFlame+DoubleJump+Climb</Requirement>\n          <Requirement mode="extended">ChargeFlame+Bash+Climb</Requirement>\n          <Requirement mode="extended">ChargeFlame+ChargeJump</Requirement>\n          <Requirement mode="extended">Grenade+ChargeJump</Requirement>\n          <Requirement mode="extended">ChargeFlame+Bash+Grenade</Requirement>\n        </Requirements>\n      </Connection>\n    </Connections>\n  </Area>\n  <Area name="HollowGroveMapStone">\n    <Locations>\n      <Location>\n        <X>351</X>\n        <Y>-119</Y>\n        <Item>MapStone</Item>\n        <Difficulty>1</Difficulty>\n        <Zone>Grove</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n    </Connections>\n  </Area>\n  <Area name="HollowGroveTree">\n    <Locations>\n      <Location>\n        <X>333</X>\n        <Y>-61</Y>\n        <Item>AC</Item>\n        <Difficulty>1</Difficulty>\n        <Zone>Grove</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n    </Connections>\n  </Area>\n  <Area name="HollowGrovePlants">\n    <Locations>\n      <Location>\n        <X>365</X>\n        <Y>-119</Y>\n        <Item>Plant</Item>\n        <Difficulty>1</Difficulty>\n        <Zone>Grove</Zone>\n      </Location>\n      <Location>\n        <X>330</X>\n        <Y>-78</Y>\n        <Item>Plant</Item>\n        <Difficulty>1</Difficulty>\n        <Zone>Grove</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n    </Connections>\n  </Area>\n  <Area name="SwampPlant">\n    <Locations>\n      <Location>\n        <X>628</X>\n        <Y>-120</Y>\n        <Item>Plant</Item>\n        <Difficulty>1</Difficulty>\n        <Zone>Swamp</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n    </Connections>\n  </Area>\n  <Area name="MoonGrottoStompPlant">\n    <Locations>\n      <Location>\n        <X>435</X>\n        <Y>-140</Y>\n        <Item>Plant</Item>\n        <Difficulty>1</Difficulty>\n        <Zone>Grotto</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n    </Connections>\n  </Area>\n  <Area name="SwampMortarPlant">\n    <Locations>\n      <Location>\n        <X>515</X>\n        <Y>-100</Y>\n        <Item>Plant</Item>\n        <Difficulty>1</Difficulty>\n        <Zone>Swamp</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n    </Connections>\n  </Area>\n  <Area name="GroveWaterStomp">\n    <Locations>\n      <Location>\n        <X>354</X>\n        <Y>-178</Y>\n        <Item>AC</Item>\n        <Difficulty>3</Difficulty>\n        <Zone>Grove</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n    </Connections>\n  </Area>\n  <Area name="RightGinsoOrb">\n    <Locations>\n      <Location>\n        <X>666</X>\n        <Y>-48</Y>\n        <Item>EX200</Item>\n        <Difficulty>1</Difficulty>\n        <Zone>Swamp</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n    </Connections>\n  </Area>\n  <Area name="LeftGinsoCell">\n    <Locations>\n      <Location>\n        <X>409</X>\n        <Y>-34</Y>\n        <Item>AC</Item>\n        <Difficulty>1</Difficulty>\n        <Zone>Swamp</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n    </Connections>\n  </Area>\n  <Area name="UpperGroveSpiderArea">\n    <Locations>\n      <Location>\n        <X>174</X>\n        <Y>-105</Y>\n        <Item>EX200</Item>\n        <Difficulty>1</Difficulty>\n        <Zone>Grove</Zone>\n      </Location>\n      <Location>\n        <X>261</X>\n        <Y>-117</Y>\n        <Item>HC</Item>\n        <Difficulty>1</Difficulty>\n        <Zone>Grove</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n      <Connection>\n        <Home name="UpperGroveSpiderArea"/>\n        <Target name="UpperGroveSpiderEnergy"/>\n        <Requirements>\n          <Requirement mode="normal">Grenade</Requirement>\n        </Requirements>\n      </Connection>\n    </Connections>\n  </Area>\n  <Area name="UpperGroveSpiderEnergy">\n    <Locations>\n      <Location>\n        <X>272</X>\n        <Y>-97</Y>\n        <Item>EC</Item>\n        <Difficulty>2</Difficulty>\n        <Zone>Grove</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n    </Connections>\n  </Area>\n  <Area name="GroveWater">\n    <Locations>\n      <Location>\n        <X>187</X>\n        <Y>-163</Y>\n        <Item>EX100</Item>\n        <Difficulty>1</Difficulty>\n        <Zone>Grove</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n    </Connections>\n  </Area>\n  <Area name="DeathWater">\n    <Locations>\n      <Location>\n        <X>339</X>\n        <Y>-216</Y>\n        <Item>AC</Item>\n        <Difficulty>2</Difficulty>\n        <Zone>Grove</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n    </Connections>\n  </Area>\n  <Area name="DeathStomp">\n    <Locations>\n      <Location>\n        <X>356</X>\n        <Y>-207</Y>\n        <Item>EX200</Item>\n        <Difficulty>1</Difficulty>\n        <Zone>Grotto</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n    </Connections>\n  </Area>\n  <Area name="UpperGrottoOrbs">\n    <Locations>\n      <Location>\n        <X>477</X>\n        <Y>-140</Y>\n        <Item>EX100</Item>\n        <Difficulty>1</Difficulty>\n        <Zone>Grotto</Zone>\n      </Location>\n      <Location>\n        <X>432</X>\n        <Y>-108</Y>\n        <Item>EX100</Item>\n        <Difficulty>1</Difficulty>\n        <Zone>Grotto</Zone>\n      </Location>\n      <Location>\n        <X>365</X>\n        <Y>-109</Y>\n        <Item>EX100</Item>\n        <Difficulty>1</Difficulty>\n        <Zone>Grove</Zone>\n      </Location>\n      <Location>\n        <X>581</X>\n        <Y>-67</Y>\n        <Item>HC</Item>\n        <Difficulty>1</Difficulty>\n        <Zone>Swamp</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n      <Connection>\n        <Home name="UpperGrottoOrbs"/>\n        <Target name="UpperGrottoOrbsPlant"/>\n        <Requirements>\n          <Requirement mode="normal">ChargeFlame</Requirement>\n          <Requirement mode="normal">Grenade</Requirement>\n          <Requirement mode="cdash">Dash</Requirement>\n        </Requirements>\n      </Connection>\n    </Connections>\n  </Area>\n  <Area name="UpperGrottoOrbsPlant">\n    <Locations>\n      <Location>\n        <X>540</X>\n        <Y>-220</Y>\n        <Item>Plant</Item>\n        <Difficulty>2</Difficulty>\n        <Zone>Grotto</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n    </Connections>\n  </Area>\n  <Area name="UpperGrotto200">\n    <Locations>\n      <Location>\n        <X>449</X>\n        <Y>-166</Y>\n        <Item>EX200</Item>\n        <Difficulty>1</Difficulty>\n        <Zone>Grotto</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n    </Connections>\n  </Area>\n  <Area name="MortarCell">\n    <Locations>\n      <Location>\n        <X>502</X>\n        <Y>-108</Y>\n        <Item>AC</Item>\n        <Difficulty>2</Difficulty>\n        <Zone>Swamp</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n    </Connections>\n  </Area>\n  <Area name="SwampGrottoWater">\n    <Locations>\n      <Location>\n        <X>595</X>\n        <Y>-136</Y>\n        <Item>EX200</Item>\n        <Difficulty>1</Difficulty>\n        <Zone>Swamp</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n    </Connections>\n  </Area>\n  <Area name="RightGrottoHealth">\n    <Locations>\n      <Location>\n        <X>543</X>\n        <Y>-189</Y>\n        <Item>HC</Item>\n        <Difficulty>2</Difficulty>\n        <Zone>Grotto</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n    </Connections>\n  </Area>\n  <Area name="MoonGrottoEnergyWater">\n    <Locations>\n      <Location>\n        <X>423</X>\n        <Y>-274</Y>\n        <Item>EX100</Item>\n        <Difficulty>1</Difficulty>\n        <Zone>Grotto</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n    </Connections>\n  </Area>\n  <Area name="MoonGrottoEnergyTop">\n    <Locations>\n      <Location>\n        <X>424</X>\n        <Y>-220</Y>\n        <Item>HC</Item>\n        <Difficulty>2</Difficulty>\n        <Zone>Grotto</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n    </Connections>\n  </Area>\n  <Area name="MoonGrottoAirOrb">\n    <Locations>\n      <Location>\n        <X>552</X>\n        <Y>-141</Y>\n        <Item>EX100</Item>\n        <Difficulty>2</Difficulty>\n        <Zone>Grotto</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n      <Connection>\n        <Home name="MoonGrottoAirOrb"/>\n        <Target name="MoonGrottoAirOrbPlant"/>\n        <Requirements>\n          <Requirement mode="normal">Stomp+ChargeFlame+WallJump+DoubleJump</Requirement>\n          <Requirement mode="normal">Stomp+ChargeFlame+ChargeJump+Glide</Requirement>\n          <Requirement mode="normal">Stomp+ChargeFlame+ChargeJump+DoubleJump</Requirement>\n          <Requirement mode="normal">Stomp+ChargeFlame+ChargeJump+Climb</Requirement>\n          <Requirement mode="normal">Stomp+Grenade</Requirement>\n          <Requirement mode="extended">Grenade</Requirement>\n          <Requirement mode="extended">ChargeFlame+Bash</Requirement>\n          <Requirement mode="extended-damage">ChargeFlame+WallJump+HC+HC+HC+HC</Requirement>\n          <Requirement mode="extended-damage">ChargeFlame+ChargeJump+HC+HC+HC+HC</Requirement>\n          <Requirement mode="extended-damage">ChargeFlame+DoubleJump+HC+HC+HC+HC</Requirement>\n          <Requirement mode="extended-damage">ChargeFlame+Glide+HC+HC+HC+HC</Requirement>\n          <Requirement mode="cdash">Dash</Requirement>\n        </Requirements>\n      </Connection>\n    </Connections>\n  </Area>\n  <Area name="MoonGrottoAirOrbPlant">\n    <Locations>\n      <Location>\n        <X>537</X>\n        <Y>-176</Y>\n        <Item>Plant</Item>\n        <Difficulty>2</Difficulty>\n        <Zone>Grotto</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n    </Connections>\n  </Area>\n  <Area name="SideFallCell">\n    <Locations>\n      <Location>\n        <X>451</X>\n        <Y>-296</Y>\n        <Item>AC</Item>\n        <Difficulty>1</Difficulty>\n        <Zone>Grotto</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n      <Connection>\n        <Home name="SideFallCell"/>\n        <Target name="GumoHideout"/>\n        <Requirements>\n          <Requirement mode="normal">Free</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="SideFallCell"/>\n        <Target name="GumoHideoutPartialMobile"/>\n        <Requirements>\n          <Requirement mode="normal">Free</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="SideFallCell"/>\n        <Target name="GumoHideoutRedirectAC"/>\n        <Requirements>\n          <Requirement mode="dboost-light">Free</Requirement>\n        </Requirements>\n      </Connection>\n    </Connections>\n  </Area>\n  <Area name="GumoHideout">\n    <Locations>\n      <Location>\n        <X>513</X>\n        <Y>-413</Y>\n        <Item>MS</Item>\n        <Difficulty>1</Difficulty>\n        <Zone>Grotto</Zone>\n      </Location>\n      <Location>\n        <X>620</X>\n        <Y>-404</Y>\n        <Item>KS</Item>\n        <Difficulty>2</Difficulty>\n        <Zone>Grotto</Zone>\n      </Location>\n      <Location>\n        <X>572</X>\n        <Y>-378</Y>\n        <Item>EX100</Item>\n        <Difficulty>0</Difficulty>\n        <Zone>Grotto</Zone>\n      </Location>\n      <Location>\n        <X>590</X>\n        <Y>-384</Y>\n        <Item>KS</Item>\n        <Difficulty>0</Difficulty>\n        <Zone>Grotto</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n      <Connection>\n        <Home name="GumoHideout"/>\n        <Target name="DoubleJumpArea"/>\n        <Requirements>\n          <Requirement mode="normal">KS+KS+WallJump</Requirement>\n          <Requirement mode="dboost-light">KS+KS+Climb</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="GumoHideout"/>\n        <Target name="MobileGumoHideout"/>\n        <Requirements>\n          <Requirement mode="normal">WallJump+DoubleJump</Requirement>\n          <Requirement mode="normal">Climb+ChargeJump</Requirement>\n          <Requirement mode="normal">WallJump+ChargeJump</Requirement>\n          <Requirement mode="extreme">WallJump+Bash</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="GumoHideout"/>\n        <Target name="GumoHideoutPartialMobile"/>\n        <Requirements>\n          <Requirement mode="normal">WallJump+DoubleJump</Requirement>\n          <Requirement mode="normal">Climb+ChargeJump</Requirement>\n          <Requirement mode="normal">WallJump+ChargeJump</Requirement>\n          <Requirement mode="normal">Glide+Wind</Requirement>\n          <Requirement mode="extreme">WallJump+Bash</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="GumoHideout"/>\n        <Target name="GumoHideoutRedirectAC"/>\n        <Requirements>\n          <Requirement mode="normal">WallJump+DoubleJump</Requirement>\n          <Requirement mode="normal">Climb+ChargeJump</Requirement>\n          <Requirement mode="normal">WallJump+ChargeJump</Requirement>\n          <Requirement mode="normal">Glide+Wind</Requirement>\n          <Requirement mode="extreme">WallJump+Bash</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="GumoHideout"/>\n        <Target name="GumoHideoutMapStone"/>\n        <Requirements>\n          <Requirement mode="normal">MS</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="GumoHideout"/>\n        <Target name="LowerBlackRoot"/>\n        <Requirements>\n          <Requirement mode="glitched">Dash</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="GumoHideout"/>\n        <Target name="SideFallCell"/>\n        <Requirements>\n          <Requirement mode="normal">Bash+Grenade</Requirement>\n          <Requirement mode="normal">Glide+Wind</Requirement>\n          <Requirement mode="normal">ChargeJump</Requirement>\n          <Requirement mode="dbash">Bash</Requirement>\n        </Requirements>\n      </Connection>\n    </Connections>\n  </Area>\n  <Area name="GumoHideoutPartialMobile">\n    <Locations>\n      <Location>\n        <X>496</X>\n        <Y>-369</Y>\n        <Item>EX15</Item>\n        <Difficulty>1</Difficulty>\n        <Zone>Grotto</Zone>\n      </Location>\n      <Location>\n        <X>467</X>\n        <Y>-369</Y>\n        <Item>EX15</Item>\n        <Difficulty>1</Difficulty>\n        <Zone>Grotto</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n      <Connection>\n        <Home name="GumoHideoutPartialMobile"/>\n        <Target name="MobileGumoHideoutPlants"/>\n        <Requirements>\n          <Requirement mode="normal">ChargeFlame</Requirement>\n          <Requirement mode="normal">Grenade</Requirement>\n          <Requirement mode="cdash">Dash</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="GumoHideoutPartialMobile"/>\n        <Target name="GumoHideoutWater"/>\n        <Requirements>\n          <Requirement mode="normal">Water</Requirement>\n          <Requirement mode="dboost">Free</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="GumoHideoutPartialMobile"/>\n        <Target name="HideoutRedirect"/>\n        <Requirements>\n          <Requirement mode="normal">EC+EC+EC+EC</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="GumoHideoutPartialMobile"/>\n        <Target name="GumoHideoutRedirectAC"/>\n        <Requirements>\n          <Requirement mode="dboost-light">Free</Requirement>\n        </Requirements>\n      </Connection>\n    </Connections>\n  </Area>\n  <Area name="GumoHideoutRedirectAC">\n    <Locations>\n      <Location>\n        <X>449</X>\n        <Y>-430</Y>\n        <Item>AC</Item>\n        <Difficulty>1</Difficulty>\n        <Zone>Grotto</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n    </Connections>\n  </Area>\n  <Area name="GumoHideoutMapStone">\n    <Locations>\n      <Location>\n        <X>477</X>\n        <Y>-389</Y>\n        <Item>MapStone</Item>\n        <Difficulty>1</Difficulty>\n        <Zone>Grotto</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n    </Connections>\n  </Area>\n  <Area name="DoubleJumpArea">\n    <Locations>\n      <Location>\n        <X>784</X>\n        <Y>-412</Y>\n        <Item>SKDoubleJump</Item>\n        <Difficulty>0</Difficulty>\n        <Zone>Grotto</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n      <Connection>\n        <Home name="DoubleJumpArea"/>\n        <Target name="MobileDoubleJumpArea"/>\n        <Requirements>\n          <Requirement mode="normal">WallJump+DoubleJump</Requirement>\n          <Requirement mode="normal">ChargeJump</Requirement>\n          <Requirement mode="normal">Bash</Requirement>\n          <Requirement mode="normal">Climb+DoubleJump</Requirement>\n        </Requirements>\n      </Connection>\n    </Connections>\n  </Area>\n  <Area name="MobileDoubleJumpArea">\n    <Locations>\n      <Location>\n        <X>759</X>\n        <Y>-398</Y>\n        <Item>EX100</Item>\n        <Difficulty>1</Difficulty>\n        <Zone>Grotto</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n    </Connections>\n  </Area>\n  <Area name="MobileGumoHideout">\n    <Locations>\n      <Location>\n        <X>545</X>\n        <Y>-357</Y>\n        <Item>EC</Item>\n        <Difficulty>1</Difficulty>\n        <Zone>Grotto</Zone>\n      </Location>\n      <Location>\n        <X>567</X>\n        <Y>-246</Y>\n        <Item>EX100</Item>\n        <Difficulty>1</Difficulty>\n        <Zone>Grotto</Zone>\n      </Location>\n      <Location>\n        <X>0</X>\n        <Y>0</Y>\n        <Item>EVGinsoKey</Item>\n        <Difficulty>1</Difficulty>\n        <Zone>Grotto</Zone>\n      </Location>\n      <Location>\n        <X>406</X>\n        <Y>-386</Y>\n        <Item>EX100</Item>\n        <Difficulty>1</Difficulty>\n        <Zone>Grotto</Zone>\n      </Location>\n      <Location>\n        <X>393</X>\n        <Y>-375</Y>\n        <Item>HC</Item>\n        <Difficulty>1</Difficulty>\n        <Zone>Grotto</Zone>\n      </Location>\n      <Location>\n        <X>328</X>\n        <Y>-353</Y>\n        <Item>EX100</Item>\n        <Difficulty>2</Difficulty>\n        <Zone>Grotto</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n      <Connection>\n        <Home name="MobileGumoHideout"/>\n        <Target name="MoonGrotto"/>\n        <Requirements>\n          <Requirement mode="normal">Free</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="MobileGumoHideout"/>\n        <Target name="GumoHideoutWater"/>\n        <Requirements>\n          <Requirement mode="normal">Water</Requirement>\n          <Requirement mode="dboost">Free</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="MobileGumoHideout"/>\n        <Target name="HideoutRedirect"/>\n        <Requirements>\n          <Requirement mode="normal">EC+EC+EC+EC</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="MobileGumoHideout"/>\n        <Target name="MobileGumoHideoutPlants"/>\n        <Requirements>\n          <Requirement mode="normal">ChargeFlame</Requirement>\n          <Requirement mode="normal">Grenade</Requirement>\n          <Requirement mode="cdash">Dash</Requirement>\n        </Requirements>\n      </Connection>\n    </Connections>\n  </Area>\n  <Area name="MobileGumoHideoutPlants">\n    <Locations>\n      <Location>\n        <X>447</X>\n        <Y>-368</Y>\n        <Item>Plant</Item>\n        <Difficulty>1</Difficulty>\n        <Zone>Grotto</Zone>\n      </Location>\n      <Location>\n        <X>439</X>\n        <Y>-344</Y>\n        <Item>Plant</Item>\n        <Difficulty>1</Difficulty>\n        <Zone>Grotto</Zone>\n      </Location>\n      <Location>\n        <X>492</X>\n        <Y>-400</Y>\n        <Item>Plant</Item>\n        <Difficulty>1</Difficulty>\n        <Zone>Grotto</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n    </Connections>\n  </Area>\n  <Area name="GumoHideoutWater">\n    <Locations>\n      <Location>\n        <X>397</X>\n        <Y>-411</Y>\n        <Item>EX100</Item>\n        <Difficulty>1</Difficulty>\n        <Zone>Grotto</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n    </Connections>\n  </Area>\n  <Area name="HideoutRedirect">\n    <Locations>\n      <Location>\n        <X>515</X>\n        <Y>-441</Y>\n        <Item>EC</Item>\n        <Difficulty>2</Difficulty>\n        <Zone>Grotto</Zone>\n      </Location>\n      <Location>\n        <X>505</X>\n        <Y>-439</Y>\n        <Item>EX200</Item>\n        <Difficulty>2</Difficulty>\n        <Zone>Grotto</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n    </Connections>\n  </Area>\n  <Area name="DrainlessCell">\n    <Locations>\n      <Location>\n        <X>643</X>\n        <Y>-127</Y>\n        <Item>AC</Item>\n        <Difficulty>1</Difficulty>\n        <Zone>Swamp</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n    </Connections>\n  </Area>\n  <Area name="DeathGauntletRoof">\n    <Locations>\n      <Location>\n        <X>321</X>\n        <Y>-179</Y>\n        <Item>HC</Item>\n        <Difficulty>1</Difficulty>\n        <Zone>Grove</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n      <Connection>\n        <Home name="DeathGauntletRoof"/>\n        <Target name="DeathGauntlet"/>\n        <Requirements>\n          <Requirement mode="normal">Free</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="DeathGauntletRoof"/>\n        <Target name="DeathGauntletRoofPlant"/>\n        <Requirements>\n          <Requirement mode="normal">ChargeFlame</Requirement>\n          <Requirement mode="normal">Grenade</Requirement>\n          <Requirement mode="cdash">Dash</Requirement>\n        </Requirements>\n      </Connection>\n    </Connections>\n  </Area>\n  <Area name="DeathGauntletRoofPlant">\n    <Locations>\n      <Location>\n        <X>342</X>\n        <Y>-179</Y>\n        <Item>Plant</Item>\n        <Difficulty>2</Difficulty>\n        <Zone>Grove</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n    </Connections>\n  </Area>\n  <Area name="LowerGinsoTree">\n    <Locations>\n      <Location>\n        <X>523</X>\n        <Y>142</Y>\n        <Item>EX100</Item>\n        <Difficulty>1</Difficulty>\n        <Zone>Ginso</Zone>\n      </Location>\n      <Location>\n        <X>531</X>\n        <Y>267</Y>\n        <Item>KS</Item>\n        <Difficulty>1</Difficulty>\n        <Zone>Ginso</Zone>\n      </Location>\n      <Location>\n        <X>540</X>\n        <Y>277</Y>\n        <Item>KS</Item>\n        <Difficulty>1</Difficulty>\n        <Zone>Ginso</Zone>\n      </Location>\n      <Location>\n        <X>508</X>\n        <Y>304</Y>\n        <Item>KS</Item>\n        <Difficulty>1</Difficulty>\n        <Zone>Ginso</Zone>\n      </Location>\n      <Location>\n        <X>529</X>\n        <Y>297</Y>\n        <Item>KS</Item>\n        <Difficulty>1</Difficulty>\n        <Zone>Ginso</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n      <Connection>\n        <Home name="LowerGinsoTree"/>\n        <Target name="BashTree"/>\n        <Requirements>\n          <Requirement mode="normal">KS+KS+KS+KS</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="LowerGinsoTree"/>\n        <Target name="LowerGinsoTreePlant"/>\n        <Requirements>\n          <Requirement mode="normal">ChargeFlame</Requirement>\n          <Requirement mode="normal">Grenade</Requirement>\n          <Requirement mode="cdash">Dash</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="LowerGinsoTree"/>\n        <Target name="Horu"/>\n        <Requirements>\n          <Requirement mode="glitched">Dash</Requirement>\n        </Requirements>\n      </Connection>\n    </Connections>\n  </Area>\n  <Area name="LowerGinsoTreePlant">\n    <Locations>\n      <Location>\n        <X>540</X>\n        <Y>101</Y>\n        <Item>Plant</Item>\n        <Difficulty>3</Difficulty>\n        <Zone>Ginso</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n    </Connections>\n  </Area>\n  <Area name="BashTree">\n    <Locations>\n      <Location>\n        <X>532</X>\n        <Y>328</Y>\n        <Item>SKBash</Item>\n        <Difficulty>1</Difficulty>\n        <Zone>Ginso</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n      <Connection>\n        <Home name="BashTree"/>\n        <Target name="UpperGinsoTree"/>\n        <Requirements>\n          <Requirement mode="normal">Bash</Requirement>\n          <Requirement mode="normal">ChargeJump</Requirement>\n        </Requirements>\n      </Connection>\n    </Connections>\n  </Area>\n  <Area name="UpperGinsoTree">\n    <Locations>\n      <Location>\n        <X>518</X>\n        <Y>339</Y>\n        <Item>EX100</Item>\n        <Difficulty>1</Difficulty>\n        <Zone>Ginso</Zone>\n      </Location>\n      <Location>\n        <X>507</X>\n        <Y>476</Y>\n        <Item>KS</Item>\n        <Difficulty>1</Difficulty>\n        <Zone>Ginso</Zone>\n      </Location>\n      <Location>\n        <X>535</X>\n        <Y>488</Y>\n        <Item>KS</Item>\n        <Difficulty>1</Difficulty>\n        <Zone>Ginso</Zone>\n      </Location>\n      <Location>\n        <X>531</X>\n        <Y>502</Y>\n        <Item>KS</Item>\n        <Difficulty>1</Difficulty>\n        <Zone>Ginso</Zone>\n      </Location>\n      <Location>\n        <X>508</X>\n        <Y>498</Y>\n        <Item>KS</Item>\n        <Difficulty>1</Difficulty>\n        <Zone>Ginso</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n      <Connection>\n        <Home name="UpperGinsoTree"/>\n        <Target name="TopGinsoTree"/>\n        <Requirements>\n          <Requirement mode="normal">KS+KS+KS+KS+Bash+WallJump</Requirement>\n          <Requirement mode="normal">KS+KS+KS+KS+Bash+Climb</Requirement>\n          <Requirement mode="dboost">KS+KS+KS+KS+ChargeJump+WallJump+HC+HC+HC+HC+HC</Requirement>\n          <Requirement mode="dboost">KS+KS+KS+KS+ChargeJump+Climb+HC+HC+HC+HC+HC</Requirement>\n          <Requirement mode="extended">KS+KS+KS+KS+Bash+ChargeJump</Requirement>\n          <Requirement mode="extended-damage">KS+KS+KS+KS+ChargeJump+HC+HC+HC+HC+HC</Requirement>\n          <Requirement mode="extended-damage">KS+KS+KS+KS+ChargeJump+DoubleJump</Requirement>\n          <Requirement mode="extreme">WallJump+DoubleJump+HC+HC+HC+HC+HC+HC+HC</Requirement>\n          <!-- this can be reached with chargejump only due to a micro ledge-->\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="UpperGinsoTree"/>\n        <Target name="UpperGinsoFloors"/>\n        <Requirements>\n          <Requirement mode="normal">Bash</Requirement>\n          <Requirement mode="normal">Stomp</Requirement>\n          <Requirement mode="extended">ChargeFlame</Requirement>\n        </Requirements>\n      </Connection>\n    </Connections>\n  </Area>\n  <Area name="UpperGinsoFloors">\n    <Locations>\n      <Location>\n        <X>517</X>\n        <Y>384</Y>\n        <Item>EX100</Item>\n        <Difficulty>1</Difficulty>\n        <Zone>Ginso</Zone>\n      </Location>\n      <Location>\n        <X>530</X>\n        <Y>407</Y>\n        <Item>EX100</Item>\n        <Difficulty>2</Difficulty>\n        <Zone>Ginso</Zone>\n      </Location>\n      <Location>\n        <X>536</X>\n        <Y>434</Y>\n        <Item>EC</Item>\n        <Difficulty>1</Difficulty>\n        <Zone>Ginso</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n    </Connections>\n  </Area>\n  <Area name="TopGinsoTree">\n    <Locations>\n      <Location>\n        <X>456</X>\n        <Y>566</Y>\n        <Item>EX100</Item>\n        <Difficulty>1</Difficulty>\n        <Zone>Ginso</Zone>\n      </Location>\n      <Location>\n        <X>471</X>\n        <Y>614</Y>\n        <Item>EX100</Item>\n        <Difficulty>1</Difficulty>\n        <Zone>Ginso</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n      <Connection>\n        <Home name="TopGinsoTree"/>\n        <Target name="GinsoEscape"/>\n        <Requirements>\n          <Requirement mode="normal">Bash</Requirement>\n          <Requirement mode="speed">Stomp</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="TopGinsoTree"/>\n        <Target name="TopGinsoTreePlant"/>\n        <Requirements>\n          <Requirement mode="normal">ChargeFlame</Requirement>\n          <Requirement mode="normal">Grenade</Requirement>\n          <Requirement mode="cdash">Dash</Requirement>\n        </Requirements>\n      </Connection>\n    </Connections>\n  </Area>\n  <Area name="TopGinsoTreePlant">\n    <Locations>\n      <Location>\n        <X>610</X>\n        <Y>611</Y>\n        <Item>Plant</Item>\n        <Difficulty>3</Difficulty>\n        <Zone>Ginso</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n    </Connections>\n  </Area>\n  <Area name="GinsoEscape">\n    <Locations>\n      <Location>\n        <X>534</X>\n        <Y>661</Y>\n        <Item>EX200</Item>\n        <Difficulty>2</Difficulty>\n        <Zone>Ginso</Zone>\n      </Location>\n      <Location>\n        <X>537</X>\n        <Y>733</Y>\n        <Item>EX100</Item>\n        <Difficulty>2</Difficulty>\n        <Zone>Ginso</Zone>\n      </Location>\n      <Location>\n        <X>533</X>\n        <Y>827</Y>\n        <Item>EX100</Item>\n        <Difficulty>2</Difficulty>\n        <Zone>Ginso</Zone>\n      </Location>\n      <Location>\n        <X>519</X>\n        <Y>867</Y>\n        <Item>EX100</Item>\n        <Difficulty>2</Difficulty>\n        <Zone>Ginso</Zone>\n      </Location>\n      <Location>\n        <X>0</X>\n        <Y>4</Y>\n        <Item>EVWater</Item>\n        <Difficulty>2</Difficulty>\n        <Zone>Ginso</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n    </Connections>\n  </Area>\n  <Area name="Swamp">\n    <Locations>\n    </Locations>\n    <Connections>\n      <Connection>\n        <Home name="Swamp"/>\n        <Target name="DrainlessCell"/>\n        <Requirements>\n          <Requirement mode="normal">Stomp</Requirement>\n          <Requirement mode="extended">ChargeJump+Climb</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="Swamp"/>\n        <Target name="SwampWater"/>\n        <Requirements>\n          <Requirement mode="normal">Water</Requirement>\n          <Requirement mode="extreme">HC+HC+HC+HC+HC+HC+HC</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="Swamp"/>\n        <Target name="DrainExp"/>\n        <Requirements>\n          <Requirement mode="normal">Water+Climb+ChargeJump</Requirement>\n          <Requirement mode="normal">Water+DoubleJump</Requirement>\n          <Requirement mode="normal">Water+Glide</Requirement>\n          <Requirement mode="normal">Water+Dash</Requirement>\n          <Requirement mode="normal">Water+Bash+Grenade</Requirement>\n          <Requirement mode="dbash">Water+Bash</Requirement>\n          <Requirement mode="extreme">HC+HC+HC+HC+HC+HC+HC+Climb+ChargeJump</Requirement>\n          <Requirement mode="extreme">HC+HC+HC+HC+HC+HC+HC+DoubleJump</Requirement>\n          <Requirement mode="extreme">HC+HC+HC+HC+HC+HC+HC+Glide</Requirement>\n          <Requirement mode="extreme">HC+HC+HC+HC+HC+HC+HC+Dash</Requirement>\n          <Requirement mode="extreme">HC+HC+HC+HC+HC+HC+HC+Bash</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="Swamp"/>\n        <Target name="SwampStomp"/>\n        <Requirements>\n          <Requirement mode="normal">Stomp</Requirement>\n          <Requirement mode="extended">Climb+ChargeJump</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="Swamp"/>\n        <Target name="SwampEnergy"/>\n        <Requirements>\n          <Requirement mode="normal">Wind+Glide</Requirement>\n          <Requirement mode="normal">ChargeJump+Climb+Glide</Requirement>\n          <Requirement mode="normal">ChargeJump+Climb+DoubleJump</Requirement>\n          <Requirement mode="dbash">Bash</Requirement>\n          <!-- dbash here requires dboosting, but only 2 if done right -->\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="Swamp"/>\n        <Target name="RightSwamp"/>\n        <Requirements>\n          <Requirement mode="normal">KS+KS+WallJump</Requirement>\n          <Requirement mode="normal">KS+KS+Climb</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="Swamp"/>\n        <Target name="SwampMapStone"/>\n        <Requirements>\n          <Requirement mode="normal">MS</Requirement>\n        </Requirements>\n      </Connection>\n    </Connections>\n  </Area>\n  <Area name="SwampMapStone">\n    <Locations>\n      <Location>\n        <X>677</X>\n        <Y>-129</Y>\n        <Item>MapStone</Item>\n        <Difficulty>2</Difficulty>\n        <Zone>Swamp</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n    </Connections>\n  </Area>\n  <Area name="DrainExp">\n    <Locations>\n      <Location>\n        <X>636</X>\n        <Y>-162</Y>\n        <Item>EX100</Item>\n        <Difficulty>2</Difficulty>\n        <Zone>Swamp</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n    </Connections>\n  </Area>\n  <Area name="SwampWater">\n    <Locations>\n      <Location>\n        <X>761</X>\n        <Y>-173</Y>\n        <Item>EX100</Item>\n        <Difficulty>2</Difficulty>\n        <Zone>Swamp</Zone>\n      </Location>\n      <Location>\n        <X>684</X>\n        <Y>-205</Y>\n        <Item>KS</Item>\n        <Difficulty>2</Difficulty>\n        <Zone>Swamp</Zone>\n      </Location>\n      <Location>\n        <X>766</X>\n        <Y>-183</Y>\n        <Item>KS</Item>\n        <Difficulty>2</Difficulty>\n        <Zone>Swamp</Zone>\n      </Location>\n      <Location>\n        <X>796</X>\n        <Y>-210</Y>\n        <Item>MS</Item>\n        <Difficulty>2</Difficulty>\n        <Zone>Swamp</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n    </Connections>\n  </Area>\n  <Area name="SwampStomp">\n    <Locations>\n      <Location>\n        <X>770</X>\n        <Y>-148</Y>\n        <Item>EX100</Item>\n        <Difficulty>1</Difficulty>\n        <Zone>Swamp</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n    </Connections>\n  </Area>\n  <Area name="SwampEnergy">\n    <Locations>\n      <Location>\n        <X>722</X>\n        <Y>-95</Y>\n        <Item>EC</Item>\n        <Difficulty>2</Difficulty>\n        <Zone>Swamp</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n    </Connections>\n  </Area>\n  <Area name="RightSwamp">\n    <Locations>\n      <Location>\n        <X>860</X>\n        <Y>-96</Y>\n        <Item>SKStomp</Item>\n        <Difficulty>1</Difficulty>\n        <Zone>Swamp</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n      <Connection>\n        <Home name="RightSwamp"/>\n        <Target name="RightSwampStomp"/>\n        <Requirements>\n          <Requirement mode="normal">Stomp</Requirement>\n          <Requirement mode="normal">Bash</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="RightSwamp"/>\n        <Target name="RightSwampCJump"/>\n        <Requirements>\n          <Requirement mode="normal">ChargeJump</Requirement>\n          <Requirement mode="dbash">Bash</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="RightSwamp"/>\n        <Target name="RightSwampGrenade"/>\n        <Requirements>\n          <Requirement mode="normal">Grenade+Water</Requirement>\n          <Requirement mode="dboost">Grenade</Requirement>\n        </Requirements>\n      </Connection>\n    </Connections>\n  </Area>\n  <Area name="RightSwampCJump">\n    <Locations>\n      <Location>\n        <X>914</X>\n        <Y>-71</Y>\n        <Item>EX200</Item>\n        <Difficulty>3</Difficulty>\n        <Zone>Swamp</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n    </Connections>\n  </Area>\n  <Area name="RightSwampStomp">\n    <Locations>\n      <Location>\n        <X>884</X>\n        <Y>-98</Y>\n        <Item>EX100</Item>\n        <Difficulty>2</Difficulty>\n        <Zone>Swamp</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n    </Connections>\n  </Area>\n  <Area name="RightSwampGrenade">\n    <Locations>\n      <Location>\n        <X>874</X>\n        <Y>-143</Y>\n        <Item>EX200</Item>\n        <Difficulty>2</Difficulty>\n        <Zone>Swamp</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n    </Connections>\n  </Area>\n  <Area name="HoruFields">\n    <Locations>\n      <Location>\n        <X>97</X>\n        <Y>-37</Y>\n        <Item>EX200</Item>\n        <Difficulty>3</Difficulty>\n        <Zone>Grove</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n      <Connection>\n        <Home name="HoruFields"/>\n        <Target name="HoruFieldsEnergy"/>\n        <Requirements>\n          <Requirement mode="normal">Bash</Requirement>\n          <Requirement mode="normal">DoubleJump</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="HoruFields"/>\n        <Target name="BelowHoruFields"/>\n        <Requirements>\n          <Requirement mode="normal">WallJump+DoubleJump+Bash</Requirement>\n          <Requirement mode="normal">Climb+ChargeJump</Requirement>\n          <Requirement mode="dboost">WallJump+Bash+HC+HC+HC+HC+HC</Requirement>\n          <Requirement mode="dboost">DoubleJump+Bash+HC+HC+HC+HC+HC</Requirement>\n          <Requirement mode="dbash">Bash</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="HoruFields"/>\n        <Target name="HoruOuterDoor"/>\n        <Requirements>\n          <Requirement mode="normal">HoruKey+Bash+DoubleJump+Glide+WallJump</Requirement>\n          <Requirement mode="normal">HoruKey+Bash+DoubleJump+ChargeJump+WallJump</Requirement>\n          <Requirement mode="normal">HoruKey+Bash+Glide+ChargeJump+WallJump</Requirement>\n          <Requirement mode="normal">HoruKey+Bash+DoubleJump+Glide+Climb</Requirement>\n          <Requirement mode="normal">HoruKey+Bash+DoubleJump+ChargeJump+Climb</Requirement>\n          <Requirement mode="normal">HoruKey+Bash+Glide+ChargeJump+Climb</Requirement>\n          <Requirement mode="extended">HoruKey+Bash+Grenade+WallJump</Requirement>\n          <Requirement mode="extended">HoruKey+Bash+Grenade+Climb</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Entrance/>\n        <Home name="HoruFields"/>\n        <Target name="DoorWarp"/>\n        <Requirements>\n          <Requirement mode="extended">HoruKey</Requirement>\n        </Requirements>\n      </Connection>\n    </Connections>\n  </Area>\n  <Area name="HoruOuterDoor">\n    <Locations>\n    </Locations>\n    <Connections>\n      <Connection>\n        <Entrance/>\n        <Home name="HoruOuterDoor"/>\n        <Target name="HoruInnerDoor"/>\n        <Requirements>\n          <Requirement mode="normal">HoruKey</Requirement>\n        </Requirements>\n      </Connection>\n    </Connections>\n  </Area>\n  <Area name="HoruInnerDoor">\n    <Locations>\n    </Locations>\n    <Connections>\n      <Connection>\n        <Home name="HoruInnerDoor"/>\n        <Target name="Horu"/>\n        <Requirements>\n          <Requirement mode="normal">Bash+DoubleJump+Glide+WallJump</Requirement>\n          <Requirement mode="normal">Bash+DoubleJump+ChargeJump+WallJump</Requirement>\n          <Requirement mode="normal">Bash+Glide+ChargeJump+WallJump</Requirement>\n          <Requirement mode="normal">Bash+DoubleJump+Glide+Climb</Requirement>\n          <Requirement mode="normal">Bash+DoubleJump+ChargeJump+Climb</Requirement>\n          <Requirement mode="normal">Bash+Glide+ChargeJump+Climb</Requirement>\n          <Requirement mode="extended">Bash+Grenade+WallJump</Requirement>\n          <Requirement mode="extended">Bash+Grenade+Climb</Requirement>\n        </Requirements>\n      </Connection>\n    </Connections>\n  </Area>\n  <Area name="HoruFieldsEnergy">\n    <Locations>\n      <Location>\n        <X>175</X>\n        <Y>1</Y>\n        <Item>EC</Item>\n        <Difficulty>3</Difficulty>\n        <Zone>Grove</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n      <Connection>\n        <Home name="HoruFieldsEnergy"/>\n        <Target name="HoruFieldsEnergyPlant"/>\n        <Requirements>\n          <Requirement mode="normal">ChargeFlame</Requirement>\n          <Requirement mode="normal">Grenade</Requirement>\n          <Requirement mode="cdash">Dash</Requirement>\n        </Requirements>\n      </Connection>\n    </Connections>\n  </Area>\n  <Area name="HoruFieldsEnergyPlant">\n    <Locations>\n      <Location>\n        <X>124</X>\n        <Y>21</Y>\n        <Item>Plant</Item>\n        <Difficulty>4</Difficulty>\n        <Zone>Grove</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n    </Connections>\n  </Area>\n  <Area name="BelowHoruFields">\n    <Locations>\n      <Location>\n        <X>176</X>\n        <Y>-34</Y>\n        <Item>AC</Item>\n        <Difficulty>3</Difficulty>\n        <Zone>Grove</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n    </Connections>\n  </Area>\n  <Area name="HoruFieldsStomp">\n    <Locations>\n      <Location>\n        <X>160</X>\n        <Y>-78</Y>\n        <Item>HC</Item>\n        <Difficulty>2</Difficulty>\n        <Zone>Grove</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n    </Connections>\n  </Area>\n  <Area name="Horu">\n    <Locations>\n    </Locations>\n    <Connections>\n      <Connection>\n        <Home name="Horu"/>\n        <Target name="L1OuterDoor"/>\n        <Requirements>\n          <Requirement mode="normal">Free</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="Horu"/>\n        <Target name="L2OuterDoor"/>\n        <Requirements>\n          <Requirement mode="normal">Stomp</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="Horu"/>\n        <Target name="L3OuterDoor"/>\n        <Requirements>\n          <Requirement mode="normal">Stomp</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="Horu"/>\n        <Target name="L4OuterDoor"/>\n        <Requirements>\n          <Requirement mode="normal">Stomp</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="Horu"/>\n        <Target name="R1OuterDoor"/>\n        <Requirements>\n          <Requirement mode="normal">Free</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="Horu"/>\n        <Target name="R2OuterDoor"/>\n        <Requirements>\n          <Requirement mode="normal">Free</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="Horu"/>\n        <Target name="R3OuterDoor"/>\n        <Requirements>\n          <Requirement mode="normal">Stomp</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="Horu"/>\n        <Target name="R4OuterDoor"/>\n        <Requirements>\n          <Requirement mode="normal">Stomp</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="Horu"/>\n        <Target name="HoruEscapeOuterDoor"/>\n        <Requirements>\n          <Requirement mode="normal">Stomp</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="Horu"/>\n        <Target name="HoruHub"/>\n        <Requirements>\n          <Requirement mode="normal">Stomp</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="Horu"/>\n        <Target name="HoruMapStone"/>\n        <Requirements>\n          <Requirement mode="normal">MS</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="Horu"/>\n        <Target name="LowerGinsoTree"/>\n        <Requirements>\n          <Requirement mode="glitched">Dash</Requirement>\n        </Requirements>\n      </Connection>\n    </Connections>\n  </Area>\n  <Area name="HoruMapStone">\n    <Locations>\n      <Location>\n        <X>56</X>\n        <Y>343</Y>\n        <Item>MapStone</Item>\n        <Difficulty>6</Difficulty>\n        <Zone>Horu</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n    </Connections>\n  </Area>\n  <Area name="L1OuterDoor">\n    <Locations>\n    </Locations>\n    <Connections>\n      <Connection>\n        <Entrance/>\n        <Home name="L1OuterDoor"/>\n        <Target name="L1InnerDoor"/>\n        <Requirements>\n          <Requirement mode="normal">Free</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="L1OuterDoor"/>\n        <Target name="HoruInnerDoor"/>\n        <Requirements>\n          <Requirement mode="normal">Free</Requirement>\n        </Requirements>\n      </Connection>\n    </Connections>\n  </Area>\n  <Area name="L1InnerDoor">\n    <Locations>\n    </Locations>\n    <Connections>\n      <Connection>\n        <Home name="L1InnerDoor"/>\n        <Target name="L1"/>\n        <Requirements>\n          <Requirement mode="normal">Bash+DoubleJump+Glide+WallJump+Stomp</Requirement>\n          <Requirement mode="normal">Bash+DoubleJump+ChargeJump+WallJump+Stomp</Requirement>\n          <Requirement mode="normal">Bash+Glide+ChargeJump+WallJump+Stomp</Requirement>\n          <Requirement mode="normal">Bash+DoubleJump+Glide+Climb+Stomp</Requirement>\n          <Requirement mode="normal">Bash+DoubleJump+ChargeJump+Climb+Stomp</Requirement>\n          <Requirement mode="normal">Bash+Glide+ChargeJump+Climb+Stomp</Requirement>\n          <Requirement mode="extended">Bash+Grenade+WallJump+Stomp</Requirement>\n          <Requirement mode="extended">Bash+Grenade+Climb+Stomp</Requirement>\n        </Requirements>\n      </Connection>\n    </Connections>\n  </Area>\n  <Area name="L1">\n    <Locations>\n    </Locations>\n    <Connections>\n    </Connections>\n  </Area>\n  <Area name="L2OuterDoor">\n    <Locations>\n    </Locations>\n    <Connections>\n      <Connection>\n        <Entrance/>\n        <Home name="L2OuterDoor"/>\n        <Target name="L2InnerDoor"/>\n        <Requirements>\n          <Requirement mode="normal">Free</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="L2OuterDoor"/>\n        <Target name="HoruInnerDoor"/>\n        <Requirements>\n          <Requirement mode="normal">Stomp</Requirement>\n        </Requirements>\n      </Connection>\n    </Connections>\n  </Area>\n  <Area name="L2InnerDoor">\n    <Locations>\n    </Locations>\n    <Connections>\n      <Connection>\n        <Home name="L2InnerDoor"/>\n        <Target name="L2"/>\n        <Requirements>\n          <Requirement mode="normal">Bash+DoubleJump+Glide+WallJump+Stomp</Requirement>\n          <Requirement mode="normal">Bash+DoubleJump+ChargeJump+WallJump+Stomp</Requirement>\n          <Requirement mode="normal">Bash+Glide+ChargeJump+WallJump+Stomp</Requirement>\n          <Requirement mode="normal">Bash+DoubleJump+Glide+Climb+Stomp</Requirement>\n          <Requirement mode="normal">Bash+DoubleJump+ChargeJump+Climb+Stomp</Requirement>\n          <Requirement mode="normal">Bash+Glide+ChargeJump+Climb+Stomp</Requirement>\n          <Requirement mode="extended">Bash+Grenade+WallJump+Stomp</Requirement>\n          <Requirement mode="extended">Bash+Grenade+Climb+Stomp</Requirement>\n        </Requirements>\n      </Connection>\n    </Connections>\n  </Area>\n  <Area name="L2">\n    <Locations>\n    </Locations>\n    <Connections>\n    </Connections>\n  </Area>\n  <Area name="L3OuterDoor">\n    <Locations>\n    </Locations>\n    <Connections>\n      <Connection>\n        <Entrance/>\n        <Home name="L3OuterDoor"/>\n        <Target name="L3InnerDoor"/>\n        <Requirements>\n          <Requirement mode="normal">Free</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="L3OuterDoor"/>\n        <Target name="HoruInnerDoor"/>\n        <Requirements>\n          <Requirement mode="normal">Stomp</Requirement>\n        </Requirements>\n      </Connection>\n    </Connections>\n  </Area>\n  <Area name="L3InnerDoor">\n    <Locations>\n    </Locations>\n    <Connections>\n      <Connection>\n        <Home name="L3InnerDoor"/>\n        <Target name="L3"/>\n        <Requirements>\n          <Requirement mode="normal">Bash+DoubleJump+Glide+WallJump</Requirement>\n          <Requirement mode="normal">Bash+DoubleJump+ChargeJump+WallJump</Requirement>\n          <Requirement mode="normal">Bash+Glide+ChargeJump+WallJump</Requirement>\n          <Requirement mode="normal">Bash+DoubleJump+Glide+Climb</Requirement>\n          <Requirement mode="normal">Bash+DoubleJump+ChargeJump+Climb</Requirement>\n          <Requirement mode="normal">Bash+Glide+ChargeJump+Climb</Requirement>\n          <Requirement mode="extended">Bash+Grenade+WallJump</Requirement>\n          <Requirement mode="extended">Bash+Grenade+Climb</Requirement>\n        </Requirements>\n      </Connection>\n    </Connections>\n  </Area>\n  <Area name="L3">\n    <Locations>\n    </Locations>\n    <Connections>\n    </Connections>\n  </Area>\n  <Area name="L4OuterDoor">\n    <Locations>\n    </Locations>\n    <Connections>\n      <Connection>\n        <Entrance/>\n        <Home name="L4OuterDoor"/>\n        <Target name="L4InnerDoor"/>\n        <Requirements>\n          <Requirement mode="normal">Free</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="L4OuterDoor"/>\n        <Target name="HoruInnerDoor"/>\n        <Requirements>\n          <Requirement mode="normal">Free</Requirement>\n        </Requirements>\n      </Connection>\n    </Connections>\n  </Area>\n  <Area name="L4InnerDoor">\n    <Locations>\n    </Locations>\n    <Connections>\n      <Connection>\n        <Home name="L4InnerDoor"/>\n        <Target name="L4"/>\n        <Requirements>\n          <Requirement mode="normal">Bash+DoubleJump+Glide+WallJump+Stomp</Requirement>\n          <Requirement mode="normal">Bash+DoubleJump+ChargeJump+WallJump+Stomp</Requirement>\n          <Requirement mode="normal">Bash+Glide+ChargeJump+WallJump+Stomp</Requirement>\n          <Requirement mode="normal">Bash+DoubleJump+Glide+Climb+Stomp</Requirement>\n          <Requirement mode="normal">Bash+DoubleJump+ChargeJump+Climb+Stomp</Requirement>\n          <Requirement mode="normal">Bash+Glide+ChargeJump+Climb+Stomp</Requirement>\n          <Requirement mode="extended">Bash+Grenade+WallJump+Stomp</Requirement>\n          <Requirement mode="extended">Bash+Grenade+Climb+Stomp</Requirement>\n        </Requirements>\n      </Connection>\n    </Connections>\n  </Area>\n  <Area name="L4">\n    <Locations>\n      <Location>\n        <X>-29</X>\n        <Y>148</Y>\n        <Item>EX200</Item>\n        <Difficulty>7</Difficulty>\n        <Zone>Horu</Zone>\n      </Location>\n      <Location>\n        <X>-191</X>\n        <Y>194</Y>\n        <Item>EX200</Item>\n        <Difficulty>7</Difficulty>\n        <Zone>Horu</Zone>\n      </Location>\n      <Location>\n        <X>13</X>\n        <Y>164</Y>\n        <Item>EX200</Item>\n        <Difficulty>7</Difficulty>\n        <Zone>Horu</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n    </Connections>\n  </Area>\n  <Area name="R1OuterDoor">\n    <Locations>\n    </Locations>\n    <Connections>\n      <Connection>\n        <Entrance/>\n        <Home name="R1OuterDoor"/>\n        <Target name="R1InnerDoor"/>\n        <Requirements>\n          <Requirement mode="normal">Free</Requirement>\n        </Requirements>\n      </Connection>\n    </Connections>\n  </Area>\n  <Area name="R1InnerDoor">\n    <Locations>\n    </Locations>\n    <Connections>\n      <Connection>\n        <Home name="R1InnerDoor"/>\n        <Target name="R1"/>\n        <Requirements>\n          <Requirement mode="normal">Bash+DoubleJump+Glide+WallJump</Requirement>\n          <Requirement mode="normal">Bash+DoubleJump+ChargeJump+WallJump</Requirement>\n          <Requirement mode="normal">Bash+Glide+ChargeJump+WallJump</Requirement>\n          <Requirement mode="normal">Bash+DoubleJump+Glide+Climb</Requirement>\n          <Requirement mode="normal">Bash+DoubleJump+ChargeJump+Climb</Requirement>\n          <Requirement mode="normal">Bash+Glide+ChargeJump+Climb</Requirement>\n          <Requirement mode="extended">Bash+Grenade+WallJump</Requirement>\n          <Requirement mode="extended">Bash+Grenade+Climb</Requirement>\n        </Requirements>\n      </Connection>\n    </Connections>\n  </Area>\n  <Area name="R1">\n    <Locations>\n      <Location>\n        <X>193</X>\n        <Y>384</Y>\n        <Item>EX100</Item>\n        <Difficulty>5</Difficulty>\n        <Zone>Horu</Zone>\n      </Location>\n      <Location>\n        <X>148</X>\n        <Y>363</Y>\n        <Item>MS</Item>\n        <Difficulty>5</Difficulty>\n        <Zone>Horu</Zone>\n      </Location>\n      <Location>\n        <X>249</X>\n        <Y>403</Y>\n        <Item>EC</Item>\n        <Difficulty>5</Difficulty>\n        <Zone>Horu</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n    </Connections>\n  </Area>\n  <Area name="R2OuterDoor">\n    <Locations>\n    </Locations>\n    <Connections>\n      <Connection>\n        <Entrance/>\n        <Home name="R2OuterDoor"/>\n        <Target name="R2InnerDoor"/>\n        <Requirements>\n          <Requirement mode="normal">Free</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="R2OuterDoor"/>\n        <Target name="HoruInnerDoor"/>\n        <Requirements>\n          <Requirement mode="normal">Free</Requirement>\n        </Requirements>\n      </Connection>\n    </Connections>\n  </Area>\n  <Area name="R2InnerDoor">\n    <Locations>\n    </Locations>\n    <Connections>\n      <Connection>\n        <Home name="R2InnerDoor"/>\n        <Target name="R2"/>\n        <Requirements>\n          <Requirement mode="normal">Bash+DoubleJump+Glide+WallJump+Stomp</Requirement>\n          <Requirement mode="normal">Bash+DoubleJump+ChargeJump+WallJump+Stomp</Requirement>\n          <Requirement mode="normal">Bash+Glide+ChargeJump+WallJump+Stomp</Requirement>\n          <Requirement mode="normal">Bash+DoubleJump+Glide+Climb+Stomp</Requirement>\n          <Requirement mode="normal">Bash+DoubleJump+ChargeJump+Climb+Stomp</Requirement>\n          <Requirement mode="normal">Bash+Glide+ChargeJump+Climb+Stomp</Requirement>\n          <Requirement mode="extended">Bash+Grenade+WallJump+Stomp</Requirement>\n          <Requirement mode="extended">Bash+Grenade+Climb+Stomp</Requirement>\n        </Requirements>\n      </Connection>\n    </Connections>\n  </Area>\n  <Area name="R2">\n    <Locations>\n    </Locations>\n    <Connections>\n    </Connections>\n  </Area>\n  <Area name="R3OuterDoor">\n    <Locations>\n    </Locations>\n    <Connections>\n      <Connection>\n        <Entrance/>\n        <Home name="R3OuterDoor"/>\n        <Target name="R3InnerDoor"/>\n        <Requirements>\n          <Requirement mode="normal">Free</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="R3OuterDoor"/>\n        <Target name="HoruInnerDoor"/>\n        <Requirements>\n          <Requirement mode="normal">Stomp</Requirement>\n        </Requirements>\n      </Connection>\n    </Connections>\n  </Area>\n  <Area name="R3InnerDoor">\n    <Locations>\n    </Locations>\n    <Connections>\n      <Connection>\n        <Home name="R3InnerDoor"/>\n        <Target name="R3"/>\n        <Requirements>\n          <Requirement mode="normal">Bash+DoubleJump+Glide+WallJump</Requirement>\n          <Requirement mode="normal">Bash+DoubleJump+ChargeJump+WallJump</Requirement>\n          <Requirement mode="normal">Bash+Glide+ChargeJump+WallJump</Requirement>\n          <Requirement mode="normal">Bash+DoubleJump+Glide+Climb</Requirement>\n          <Requirement mode="normal">Bash+DoubleJump+ChargeJump+Climb</Requirement>\n          <Requirement mode="normal">Bash+Glide+ChargeJump+Climb</Requirement>\n          <Requirement mode="extended">Bash+Grenade+WallJump</Requirement>\n          <Requirement mode="extended">Bash+Grenade+Climb</Requirement>\n        </Requirements>\n      </Connection>\n    </Connections>\n  </Area>\n  <Area name="R3">\n    <Locations>\n    </Locations>\n    <Connections>\n      <Connection>\n        <Home name="R3"/>\n        <Target name="R3Plant"/>\n        <Requirements>\n          <Requirement mode="normal">ChargeFlame</Requirement>\n          <Requirement mode="normal">Grenade</Requirement>\n          <Requirement mode="cdash">Dash</Requirement>\n        </Requirements>\n      </Connection>\n    </Connections>\n  </Area>\n  <Area name="R3Plant">\n    <Locations>\n      <Location>\n        <X>318</X>\n        <Y>245</Y>\n        <Item>Plant</Item>\n        <Difficulty>7</Difficulty>\n        <Zone>Horu</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n    </Connections>\n  </Area>\n  <Area name="R4OuterDoor">\n    <Locations>\n    </Locations>\n    <Connections>\n      <Connection>\n        <Entrance/>\n        <Home name="R4OuterDoor"/>\n        <Target name="R4InnerDoor"/>\n        <Requirements>\n          <Requirement mode="normal">Free</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="R4OuterDoor"/>\n        <Target name="HoruInnerDoor"/>\n        <Requirements>\n          <Requirement mode="normal">Free</Requirement>\n        </Requirements>\n      </Connection>\n    </Connections>\n  </Area>\n  <Area name="R4InnerDoor">\n    <Locations>\n    </Locations>\n    <Connections>\n      <Connection>\n        <Home name="R4InnerDoor"/>\n        <Target name="R4"/>\n        <Requirements>\n          <Requirement mode="normal">Bash+DoubleJump+Glide+WallJump</Requirement>\n          <Requirement mode="normal">Bash+DoubleJump+ChargeJump+WallJump</Requirement>\n          <Requirement mode="normal">Bash+Glide+ChargeJump+WallJump</Requirement>\n          <Requirement mode="normal">Bash+DoubleJump+Glide+Climb</Requirement>\n          <Requirement mode="normal">Bash+DoubleJump+ChargeJump+Climb</Requirement>\n          <Requirement mode="normal">Bash+Glide+ChargeJump+Climb</Requirement>\n          <Requirement mode="extended">Bash+Grenade+WallJump</Requirement>\n          <Requirement mode="extended">Bash+Grenade+Climb</Requirement>\n        </Requirements>\n      </Connection>\n    </Connections>\n  </Area>\n  <Area name="R4">\n    <Locations>\n      <Location>\n        <X>191</X>\n        <Y>165</Y>\n        <Item>EX200</Item>\n        <Difficulty>7</Difficulty>\n        <Zone>Horu</Zone>\n      </Location>\n      <Location>\n        <X>253</X>\n        <Y>194</Y>\n        <Item>EX200</Item>\n        <Difficulty>7</Difficulty>\n        <Zone>Horu</Zone>\n      </Location>\n      <Location>\n        <X>163</X>\n        <Y>136</Y>\n        <Item>EX200</Item>\n        <Difficulty>7</Difficulty>\n        <Zone>Horu</Zone>\n      </Location>\n      <Location>\n        <X>129</X>\n        <Y>165</Y>\n        <Item>EX200</Item>\n        <Difficulty>7</Difficulty>\n        <Zone>Horu</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n    </Connections>\n  </Area>\n  <Area name="HoruHub">\n    <Locations>\n    </Locations>\n    <Connections>\n      <Connection>\n        <Home name="HoruHub"/>\n        <Target name="HoruBottom"/>\n        <Requirements>\n          <Requirement mode="normal">GinsoKey+ForlornKey</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="HoruHub"/>\n        <Target name="HoruEscapeOuterDoor"/>\n        <Requirements>\n          <Requirement mode="normal">Free</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="HoruHub"/>\n        <Target name="DoorWarp"/>\n        <Requirements>\n          <Requirement mode="normal">Free</Requirement>\n        </Requirements>\n      </Connection>\n    </Connections>\n  </Area>\n  <Area name="DoorWarp">\n    <Locations>\n      <Location>\n        <X>106</X>\n        <Y>112</Y>\n        <Item>EX200</Item>\n        <Difficulty>5</Difficulty>\n        <Zone>Horu</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n    </Connections>\n  </Area>\n  <Area name="HoruEscapeOuterDoor">\n    <Locations>\n    </Locations>\n    <Connections>\n      <Connection>\n        <Entrance/>\n        <Home name="HoruEscapeOuterDoor"/>\n        <Target name="HoruEscapeInnerDoor"/>\n        <Requirements>\n          <Requirement mode="normal">Free</Requirement>\n        </Requirements>\n      </Connection>\n    </Connections>\n  </Area>\n  <Area name="HoruEscapeInnerDoor">\n    <Locations>\n    </Locations>\n    <Connections>\n      <Connection>\n        <Home name="HoruEscapeInnerDoor"/>\n        <Target name="End"/>\n        <Requirements>\n          <Requirement mode="normal">Climb+Dash+Stomp+Glide+Bash+ChargeJump+Grenade+GinsoKey+ForlornKey+HoruKey</Requirement>\n          <Requirement mode="extended">Dash+Stomp+Glide+Bash+ChargeJump+Grenade+GinsoKey+ForlornKey+HoruKey</Requirement>\n        </Requirements>\n      </Connection>\n    </Connections>\n  </Area>\n  <Area name="HoruBottom">\n    <Locations>\n      <Location>\n        <X>98</X>\n        <Y>130</Y>\n        <Item>EX200</Item>\n        <Difficulty>7</Difficulty>\n        <Zone>Horu</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n    </Connections>\n  </Area>\n  <Area name="End">\n    <Locations>\n      <Location>\n        <X>0</X>\n        <Y>20</Y>\n        <Item>EVWarmth</Item>\n        <Difficulty>0</Difficulty>\n        <Zone>Horu</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n    </Connections>\n  </Area>\n  <Area name="ValleyEntry">\n    <Locations>\n      <Location>\n        <X>-205</X>\n        <Y>-113</Y>\n        <Item>AC</Item>\n        <Difficulty>1</Difficulty>\n        <Zone>Valley</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n      <Connection>\n        <Home name="ValleyEntry"/>\n        <Target name="ValleyEntryTree"/>\n        <Requirements>\n          <Requirement mode="normal">WallJump</Requirement>\n          <Requirement mode="normal">Bash+Climb</Requirement>\n          <Requirement mode="normal">DoubleJump+Climb</Requirement>\n          <Requirement mode="normal">ChargeJump+Climb</Requirement>\n          <Requirement mode="lure">Bash</Requirement>\n          <Requirement mode="dboost">ChargeJump+HC+HC+HC+HC</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="ValleyEntry"/>\n        <Target name="ValleyRight"/>\n        <Requirements>\n          <Requirement mode="normal">Stomp+Bash+WallJump</Requirement>\n          <Requirement mode="normal">Stomp+Bash+DoubleJump</Requirement>\n          <Requirement mode="normal">Stomp+Bash+Climb+ChargeJump</Requirement>\n          <Requirement mode="normal">Stomp+Bash+Grenade</Requirement>\n          <Requirement mode="extended">Bash+DoubleJump</Requirement>\n          <Requirement mode="extended">Bash+Climb+ChargeJump</Requirement>\n          <Requirement mode="extended">Bash+WallJump</Requirement>\n          <Requirement mode="extended">Bash+Grenade</Requirement>\n          <Requirement mode="extended-damage">Stomp+ChargeJump+DoubleJump+WallJump+HC+HC+HC+HC+HC+HC+HC</Requirement>\n          <Requirement mode="dbash">Bash</Requirement>\n          <Requirement mode="extreme">Stomp+WallJump+DoubleJump+ChargeJump</Requirement>\n          <Requirement mode="extreme">Stomp+WallJump+DoubleJump+HC+HC+HC+HC+HC+HC+HC+HC+HC+HC+HC</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="ValleyEntry"/>\n        <Target name="ValleyEntryTreePlant"/>\n        <Requirements>\n          <Requirement mode="extended">Grenade</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="ValleyEntry"/>\n        <Target name="ValleyWater"/>\n        <Requirements>\n          <Requirement mode="normal">Water+Stomp+WallJump+DoubleJump</Requirement>\n          <Requirement mode="normal">Water+Stomp+WallJump+Bash</Requirement>\n          <Requirement mode="normal">Water+Stomp+WallJump+ChargeJump</Requirement>\n          <Requirement mode="normal">Water+Stomp+Climb+ChargeJump</Requirement>\n          <Requirement mode="normal">Water+Stomp+Climb+DoubleJump</Requirement>\n          <Requirement mode="dboost">Stomp+WallJump+DoubleJump</Requirement>\n          <Requirement mode="dboost">Stomp+WallJump+Bash</Requirement>\n          <Requirement mode="dboost">Stomp+WallJump+ChargeJump</Requirement>\n          <Requirement mode="dboost">Stomp+Climb+ChargeJump</Requirement>\n          <Requirement mode="dboost">Stomp+Climb+DoubleJump</Requirement>\n          <Requirement mode="extended">Bash+Water</Requirement>\n          <Requirement mode="extended-damage">Bash</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="ValleyEntry"/>\n        <Target name="SpiritTreeRefined"/>\n        <Requirements>\n          <Requirement mode="normal">ChargeFlame</Requirement>\n          <Requirement mode="normal">Grenade</Requirement>\n        </Requirements>\n      </Connection>\n    </Connections>\n  </Area>\n  <Area name="ValleyEntryTree">\n    <Locations>\n      <Location>\n        <X>-221</X>\n        <Y>-84</Y>\n        <Item>EX100</Item>\n        <Difficulty>2</Difficulty>\n        <Zone>Valley</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n      <Connection>\n        <Home name="ValleyEntryTree"/>\n        <Target name="ValleyGrenadeWater"/>\n        <Requirements>\n          <Requirement mode="normal">Water+Grenade</Requirement>\n          <Requirement mode="dboost-hard">Grenade+HC+HC+HC+HC+HC+HC+HC+HC+HC+HC+HC+HC+HC+HC</Requirement>\n          <Requirement mode="dboost-hard">Grenade+HC+HC+HC+HC+HC+HC+HC+HC+HC+HC+HC+HC+HC+Bash</Requirement>\n          <Requirement mode="extreme">Grenade+HC+HC+HC+HC+HC+HC+HC</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="ValleyEntryTree"/>\n        <Target name="ValleyEntryTreePlant"/>\n        <Requirements>\n          <Requirement mode="normal">ChargeJump+Climb+ChargeFlame</Requirement>\n          <Requirement mode="normal">ChargeJump+Climb+Grenade</Requirement>\n          <Requirement mode="normal">ChargeJump+DoubleJump+ChargeFlame</Requirement>\n          <Requirement mode="normal">ChargeJump+DoubleJump+Grenade</Requirement>\n          <Requirement mode="normal">Bash+ChargeFlame</Requirement>\n          <Requirement mode="normal">Bash+Grenade</Requirement>\n          <Requirement mode="normal">Glide+ChargeFlame</Requirement>\n          <Requirement mode="normal">Glide+Grenade</Requirement>\n          <Requirement mode="cdash-farming">Dash</Requirement>\n        </Requirements>\n      </Connection>\n    </Connections>\n  </Area>\n  <Area name="ValleyEntryTreePlant">\n    <Locations>\n      <Location>\n        <X>-179</X>\n        <Y>-88</Y>\n        <Item>Plant</Item>\n        <Difficulty>2</Difficulty>\n        <Zone>Valley</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n    </Connections>\n  </Area>\n  <Area name="ValleyGrenadeWater">\n    <Locations>\n      <Location>\n        <X>-320</X>\n        <Y>-162</Y>\n        <Item>EC</Item>\n        <Difficulty>3</Difficulty>\n        <Zone>Valley</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n    </Connections>\n  </Area>\n  <Area name="ValleyRight">\n    <Locations>\n      <Location>\n        <X>-355</X>\n        <Y>65</Y>\n        <Item>AC</Item>\n        <Difficulty>1</Difficulty>\n        <Zone>Valley</Zone>\n      </Location>\n      <Location>\n        <X>-418</X>\n        <Y>67</Y>\n        <Item>EX100</Item>\n        <Difficulty>1</Difficulty>\n        <Zone>Valley</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n      <Connection>\n        <Home name="ValleyRight"/>\n        <Target name="ValleyMain"/>\n        <Requirements>\n          <Requirement mode="normal">Bash+Stomp</Requirement>\n          <Requirement mode="extended">Dash+Bash</Requirement>\n          <Requirement mode="extended">Dash+Stomp</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="ValleyRight"/>\n        <Target name="BirdStompCell"/>\n        <Requirements>\n          <Requirement mode="normal">ChargeJump+Climb</Requirement>\n          <Requirement mode="speed">Stomp</Requirement>\n        </Requirements>\n      </Connection>\n    </Connections>\n  </Area>\n  <Area name="BirdStompCell">\n    <Locations>\n      <Location>\n        <X>-292</X>\n        <Y>20</Y>\n        <Item>AC</Item>\n        <Difficulty>1</Difficulty>\n        <Zone>Valley</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n    </Connections>\n  </Area>\n  <Area name="ValleyMain">\n    <Locations>\n      <Location>\n        <X>-460</X>\n        <Y>-20</Y>\n        <Item>SKGlide</Item>\n        <Difficulty>1</Difficulty>\n        <Zone>Valley</Zone>\n      </Location>\n      <Location>\n        <X>-546</X>\n        <Y>54</Y>\n        <Item>EX200</Item>\n        <Difficulty>1</Difficulty>\n        <Zone>Sorrow</Zone>\n      </Location>\n     <Location>\n        <X>-678</X>\n        <Y>-29</Y>\n        <Item>EX100</Item>\n        <Difficulty>1</Difficulty>\n        <Zone>Misty</Zone>\n      </Location>\n      <Location>\n        <X>-822</X>\n        <Y>-9</Y>\n        <Item>EX100</Item>\n        <Difficulty>1</Difficulty>\n        <Zone>Misty</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n      <Connection>\n        <Home name="ValleyMain"/>\n        <Target name="PreSorrowOrb"/>\n        <Requirements>\n          <Requirement mode="normal">Climb+ChargeJump</Requirement>\n          <Requirement mode="normal">WallJump+DoubleJump+ChargeJump</Requirement>\n          <Requirement mode="normal">Bash+Grenade+Climb</Requirement>\n          <Requirement mode="normal">Bash+Grenade+WallJump+DoubleJump</Requirement>\n          <Requirement mode="dbash">Bash</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="ValleyMain"/>\n        <Target name="Sorrow"/>\n        <Requirements>\n          <Requirement mode="normal">Wind+Glide</Requirement>\n          <Requirement mode="speed-lure">Glide+DoubleJump+Bash+Dash</Requirement>\n          <Requirement mode="dbash">Bash</Requirement>\n          <Requirement mode="extended-damage">ChargeJump+DoubleJump+HC+HC+HC+HC+HC+HC+HC+HC+HC</Requirement>\n          <Requirement mode="extended-damage">ChargeJump+Glide+HC+HC+HC+HC+HC+HC+HC+HC+HC</Requirement>\n          <Requirement mode="extended-damage">ChargeJump+Dash+HC+HC+HC+HC+HC+HC+HC+HC+HC</Requirement>\n          <Requirement mode="extreme">ChargeJump+DoubleJump+HC+HC+HC+HC+HC+HC+HC</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="ValleyMain"/>\n        <Target name="Misty"/>\n        <Requirements>\n          <Requirement mode="normal">Glide+Bash</Requirement>\n          <Requirement mode="dboost">Bash+DoubleJump+HC+HC+HC+HC</Requirement>\n          <Requirement mode="extreme">DoubleJump</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="ValleyMain"/>\n        <Target name="ForlornOuterDoor"/>\n        <Requirements>\n          <Requirement mode="normal">ForlornKey</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="ValleyMain"/>\n        <Target name="RightForlorn"/>\n        <Requirements>\n          <Requirement mode="glitched">Free</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="ValleyMain"/>\n        <Target name="OutsideForlornGrenade"/>\n        <Requirements>\n          <Requirement mode="normal">Grenade</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="ValleyMain"/>\n        <Target name="ValleyMainFACS"/>\n        <Requirements>\n          <Requirement mode="normal">Climb+ChargeJump</Requirement>\n          <Requirement mode="extended">Bash+Glide</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="ValleyMain"/>\n        <Target name="ValleyMainPlant"/>\n        <Requirements>\n          <Requirement mode="normal">ChargeFlame</Requirement>\n          <Requirement mode="normal">Grenade</Requirement>\n          <Requirement mode="cdash">Dash</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="ValleyMain"/>\n        <Target name="ValleyMapStone"/>\n        <Requirements>\n          <Requirement mode="normal">MS+Bash</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="ValleyMain"/>\n        <Target name="LowerValley"/>\n        <Requirements>\n          <Requirement mode="normal">Free</Requirement>\n        </Requirements>\n      </Connection>\n    </Connections>\n  </Area>\n  <Area name="ValleyMapStone">\n    <Locations>\n      <Location>\n        <X>-408</X>\n        <Y>-170</Y>\n        <Item>MapStone</Item>\n        <Difficulty>3</Difficulty>\n        <Zone>Valley</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n    </Connections>\n  </Area>\n  <Area name="ValleyMainPlant">\n    <Locations>\n      <Location>\n        <X>-468</X>\n        <Y>-67</Y>\n        <Item>Plant</Item>\n        <Difficulty>1</Difficulty>\n        <Zone>Valley</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n    </Connections>\n  </Area>\n  <Area name="PreSorrowOrb">\n    <Locations>\n      <Location>\n        <X>-572</X>\n        <Y>157</Y>\n        <Item>EX200</Item>\n        <Difficulty>1</Difficulty>\n        <Zone>Sorrow</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n    </Connections>\n  </Area>\n  <Area name="ValleyWater">\n    <Locations>\n      <Location>\n        <X>-359</X>\n        <Y>-87</Y>\n        <Item>EX100</Item>\n        <Difficulty>1</Difficulty>\n        <Zone>Valley</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n    </Connections>\n  </Area>\n  <Area name="ValleyMainFACS">\n    <Locations>\n      <Location>\n        <X>-415</X>\n        <Y>-80</Y>\n        <Item>AC</Item>\n        <Difficulty>3</Difficulty>\n        <Zone>Valley</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n    </Connections>\n  </Area>\n  <Area name="OutsideForlornGrenade">\n    <Locations>\n      <Location>\n        <X>-460</X>\n        <Y>-187</Y>\n        <Item>AC</Item>\n        <Difficulty>3</Difficulty>\n        <Zone>Valley</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n    </Connections>\n  </Area>\n  <Area name="LowerValley">\n    <Locations>\n      <Location>\n        <X>-350</X>\n        <Y>-98</Y>\n        <Item>AC</Item>\n        <Difficulty>2</Difficulty>\n        <Zone>Valley</Zone>\n      </Location>\n      <Location>\n        <X>-561</X>\n        <Y>-89</Y>\n        <Item>MS</Item>\n        <Difficulty>1</Difficulty>\n        <Zone>Valley</Zone>\n      </Location>\n      <Location>\n        <X>-538</X>\n        <Y>-104</Y>\n        <Item>EX100</Item>\n        <Difficulty>1</Difficulty>\n        <Zone>Valley</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n      <Connection>\n        <Home name="LowerValley"/>\n        <Target name="ValleyMainFACS"/>\n        <Requirements>\n          <Requirement mode="normal">Climb+ChargeJump</Requirement>\n          <Requirement mode="extended">Bash+Glide</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="LowerValley"/>\n        <Target name="LowerValleyPlantApproach"/>\n        <Requirements>\n          <Requirement mode="normal">Bash+DoubleJump</Requirement>\n          <Requirement mode="normal">Bash+Glide</Requirement>\n          <Requirement mode="normal">ChargeJump+DoubleJump</Requirement>\n          <Requirement mode="normal">ChargeJump+Glide</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="LowerValley"/>\n        <Target name="ValleyEntry"/>\n        <Requirements>\n          <Requirement mode="normal">Bash</Requirement>\n        </Requirements>\n      </Connection>\n    </Connections>\n  </Area>\n  <Area name="LowerValleyPlantApproach">\n    <Locations>\n    </Locations>\n    <Connections>\n      <Connection>\n        <Home name="LowerValleyPlantApproach"/>\n        <Target name="ValleyMainPlant"/>\n        <Requirements>\n          <Requirement mode="normal">ChargeFlame</Requirement>\n          <Requirement mode="normal">Grenade</Requirement>\n          <Requirement mode="cdash">Dash</Requirement>\n        </Requirements>\n      </Connection>    \n    </Connections>\n  </Area>\n  <Area name="OutsideForlorn">\n    <Locations>\n    </Locations>\n    <Connections>\n      <Connection>\n        <Home name="OutsideForlorn"/>\n        <Target name="OutsideForlornTree"/>\n        <Requirements>\n          <Requirement mode="normal">WallJump</Requirement>\n          <Requirement mode="normal">Climb</Requirement>\n          <Requirement mode="normal">ChargeJump</Requirement>\n          <Requirement mode="normal">Bash+Grenade</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="OutsideForlorn"/>\n        <Target name="OutsideForlornWater"/>\n        <Requirements>\n          <Requirement mode="normal">Water</Requirement>\n          <Requirement mode="dboost">HC+HC+HC+HC</Requirement>\n          <Requirement mode="dboost">Stomp</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="OutsideForlorn"/>\n        <Target name="OutsideForlornCliff"/>\n        <Requirements>\n          <Requirement mode="normal">WallJump+ChargeJump</Requirement>\n          <Requirement mode="normal">Climb+ChargeJump</Requirement>\n          <Requirement mode="normal">Bash+Glide</Requirement>\n          <Requirement mode="normal">Bash+DoubleJump</Requirement>\n          <Requirement mode="normal">Bash+Grenade</Requirement>\n        </Requirements>\n      </Connection>\n    </Connections>\n  </Area>\n  <Area name="OutsideForlornTree">\n    <Locations>\n      <Location>\n        <X>-460</X>\n        <Y>-255</Y>\n        <Item>EX100</Item>\n        <Difficulty>3</Difficulty>\n        <Zone>Valley</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n    </Connections>\n  </Area>\n  <Area name="OutsideForlornWater">\n    <Locations>\n      <Location>\n        <X>-514</X>\n        <Y>-277</Y>\n        <Item>EX100</Item>\n        <Difficulty>3</Difficulty>\n        <Zone>Valley</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n    </Connections>\n  </Area>\n  <Area name="OutsideForlornCliff">\n    <Locations>\n      <Location>\n        <X>-538</X>\n        <Y>-234</Y>\n        <Item>EX200</Item>\n        <Difficulty>3</Difficulty>\n        <Zone>Valley</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n      <Connection>\n        <Home name="OutsideForlornCliff"/>\n        <Target name="OutsideForlornGrenade"/>\n        <Requirements>\n          <Requirement mode="normal">Bash+Stomp+Grenade</Requirement>\n          <Requirement mode="extreme">Bash+Grenade</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="OutsideForlornCliff"/>\n        <Target name="ValleyMapStone"/>\n        <Requirements>\n          <Requirement mode="normal">MS+Bash+Stomp</Requirement>\n          <Requirement mode="extreme">MS+Bash</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="OutsideForlornCliff"/>\n        <Target name="OutsideForlornMS"/>\n        <Requirements>\n          <Requirement mode="normal">Bash+Stomp</Requirement>\n          <Requirement mode="extreme">Bash</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="OutsideForlornCliff"/>\n        <Target name="LowerValley"/>\n        <Requirements>\n          <Requirement mode="normal">Bash+ChargeJump+Stomp</Requirement>\n          <Requirement mode="dbash">Bash+Stomp</Requirement>\n          <Requirement mode="extreme">Bash</Requirement>\n        </Requirements>\n      </Connection>\n    </Connections>\n  </Area>\n  <Area name="OutsideForlornMS">\n    <Locations>\n      <Location>\n        <X>-443</X>\n        <Y>-152</Y>\n        <Item>MS</Item>\n        <Difficulty>2</Difficulty>\n        <Zone>Valley</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n    </Connections>\n  </Area>\n  <Area name="ForlornOuterDoor">\n    <Locations>\n    </Locations>\n    <Connections>\n      <Connection>\n        <Entrance/>\n        <Home name="ForlornOuterDoor"/>\n        <Target name="ForlornInnerDoor"/>\n        <Requirements>\n          <Requirement mode="normal">Free</Requirement>\n        </Requirements>\n      </Connection>\n    </Connections>\n  </Area>\n  <Area name="ForlornInnerDoor">\n    <Locations>\n    </Locations>\n    <Connections>\n      <Connection>\n        <Home name="ForlornInnerDoor"/>\n        <Target name="Forlorn"/>\n        <Requirements>\n          <Requirement mode="normal">Free</Requirement>\n        </Requirements>\n      </Connection>\n    </Connections>\n  </Area>\n  <Area name="Forlorn">\n    <Locations>\n      <Location>\n        <X>-703</X>\n        <Y>-390</Y>\n        <Item>EX200</Item>\n        <Difficulty>4</Difficulty>\n        <Zone>Forlorn</Zone>\n      </Location>\n      <Location>\n        <X>-841</X>\n        <Y>-350</Y>\n        <Item>EX100</Item>\n        <Difficulty>4</Difficulty>\n        <Zone>Forlorn</Zone>\n      </Location>\n      <Location>\n        <X>-858</X>\n        <Y>-353</Y>\n        <Item>KS</Item>\n        <Difficulty>4</Difficulty>\n        <Zone>Forlorn</Zone>\n      </Location>\n      <Location>\n        <X>-892</X>\n        <Y>-328</Y>\n        <Item>KS</Item>\n        <Difficulty>4</Difficulty>\n        <Zone>Forlorn</Zone>\n      </Location>\n      <Location>\n        <X>-888</X>\n        <Y>-251</Y>\n        <Item>KS</Item>\n        <Difficulty>4</Difficulty>\n        <Zone>Forlorn</Zone>\n      </Location>\n      <Location>\n        <X>-869</X>\n        <Y>-255</Y>\n        <Item>KS</Item>\n        <Difficulty>4</Difficulty>\n        <Zone>Forlorn</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n      <Connection>\n        <Home name="Forlorn"/>\n        <Target name="RightForlorn"/>\n        <Requirements>\n          <Requirement mode="normal">KS+KS+KS+KS+Glide+Stomp+Bash+WallJump</Requirement>\n          <Requirement mode="normal">KS+KS+KS+KS+Glide+Stomp+Bash+Climb</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="Forlorn"/>\n        <Target name="ForlornPlant"/>\n        <Requirements>\n          <Requirement mode="normal">ChargeFlame</Requirement>\n          <Requirement mode="normal">Grenade</Requirement>\n          <Requirement mode="cdash">Dash</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="Forlorn"/>\n        <Target name="ForlornMapStone"/>\n        <Requirements>\n          <Requirement mode="normal">MS</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="Forlorn"/>\n        <Target name="OutsideForlorn"/>\n        <Requirements>\n          <Requirement mode="normal">WallJump</Requirement>\n          <Requirement mode="normal">Climb</Requirement>\n          <Requirement mode="normal">ChargeJump</Requirement>\n        </Requirements>\n      </Connection>\n    </Connections>\n  </Area>\n  <Area name="ForlornMapStone">\n    <Locations>\n      <Location>\n        <X>-843</X>\n        <Y>-308</Y>\n        <Item>MapStone</Item>\n        <Difficulty>5</Difficulty>\n        <Zone>Forlorn</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n    </Connections>\n  </Area>\n  <Area name="ForlornPlant">\n    <Locations>\n      <Location>\n        <X>-815</X>\n        <Y>-266</Y>\n        <Item>Plant</Item>\n        <Difficulty>5</Difficulty>\n        <Zone>Forlorn</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n    </Connections>\n  </Area>\n  <Area name="RightForlorn">\n    <Locations>\n      <Location>\n        <X>-625</X>\n        <Y>-315</Y>\n        <Item>HC</Item>\n        <Difficulty>5</Difficulty>\n        <Zone>Forlorn</Zone>\n      </Location>\n      <Location>\n        <X>0</X>\n        <Y>12</Y>\n        <Item>EVWind</Item>\n        <Difficulty>6</Difficulty>\n        <Zone>Forlorn</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n      <Connection>\n        <Home name="RightForlorn"/>\n        <Target name="RightForlornPlant"/>\n        <Requirements>\n          <Requirement mode="normal">ChargeFlame</Requirement>\n          <Requirement mode="normal">Grenade</Requirement>\n          <Requirement mode="cdash">Dash</Requirement>\n        </Requirements>\n      </Connection>\n    </Connections>\n  </Area>\n  <Area name="RightForlornPlant">\n    <Locations>\n      <Location>\n        <X>-607</X>\n        <Y>-314</Y>\n        <Item>Plant</Item>\n        <Difficulty>6</Difficulty>\n        <Zone>Forlorn</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n    </Connections>\n  </Area>\n  <Area name="Sorrow">\n    <Locations>\n      <Location>\n        <X>-510</X>\n        <Y>204</Y>\n        <Item>AC</Item>\n        <Difficulty>1</Difficulty>\n        <Zone>Sorrow</Zone>\n      </Location>\n      <Location>\n        <X>-485</X>\n        <Y>323</Y>\n        <Item>KS</Item>\n        <Difficulty>1</Difficulty>\n        <Zone>Sorrow</Zone>\n      </Location>\n      <Location>\n        <X>-503</X>\n        <Y>274</Y>\n        <Item>KS</Item>\n        <Difficulty>1</Difficulty>\n        <Zone>Sorrow</Zone>\n      </Location>\n      <Location>\n        <X>-514</X>\n        <Y>303</Y>\n        <Item>KS</Item>\n        <Difficulty>3</Difficulty>\n        <Zone>Sorrow</Zone>\n      </Location>\n      <Location>\n        <X>-596</X>\n        <Y>229</Y>\n        <Item>KS</Item>\n        <Difficulty>1</Difficulty>\n        <Zone>Sorrow</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n      <Connection>\n        <Home name="Sorrow"/>\n        <Target name="LeftSorrow"/>\n        <Requirements>\n          <Requirement mode="normal">KS+KS+KS+KS+Glide</Requirement>\n          <Requirement mode="extreme">KS+KS+KS+KS+Bash</Requirement>\n          <Requirement mode="extreme">KS+KS+KS+KS+ChargeJump+Climb+DoubleJump+HC+HC+HC+HC+HC+HC+HC+HC+HC+HC</Requirement>\n          <Requirement mode="extreme">KS+KS+KS+KS+ChargeJump+Dash+WallJump+DoubleJump+HC</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="Sorrow"/>\n        <Target name="SorrowHealth"/>\n        <Requirements>\n          <Requirement mode="normal">ChargeJump</Requirement>\n          <Requirement mode="dbash">Bash</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="Sorrow"/>\n        <Target name="SorrowMapFragment"/>\n        <Requirements>\n          <Requirement mode="normal">Bash</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="Sorrow"/>\n        <Target name="SorrowMapStone"/>\n        <Requirements>\n          <Requirement mode="normal">Bash+MS</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="Sorrow"/>\n        <Target name="Horu"/>\n        <Requirements>\n          <Requirement mode="glitched">Dash</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="Sorrow"/>\n        <Target name="ValleyMain"/>\n        <Requirements>\n          <Requirement mode="normal">Stomp</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="Sorrow"/>\n        <Target name="PreSorrowOrb"/>\n        <Requirements>\n          <Requirement mode="normal">Climb+ChargeJump</Requirement>\n          <Requirement mode="normal">WallJump+DoubleJump+ChargeJump</Requirement>\n          <Requirement mode="normal">Bash+Grenade+Climb</Requirement>\n          <Requirement mode="normal">Bash+Grenade+WallJump+DoubleJump</Requirement>\n          <Requirement mode="dbash">Bash</Requirement>\n        </Requirements>\n      </Connection>\n    </Connections>\n  </Area>\n  <Area name="SorrowMapStone">\n    <Locations>\n      <Location>\n        <X>-451</X>\n        <Y>284</Y>\n        <Item>MapStone</Item>\n        <Difficulty>4</Difficulty>\n        <Zone>Sorrow</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n    </Connections>\n  </Area>\n  <Area name="SorrowMapFragment">\n    <Locations>\n      <Location>\n        <X>-435</X>\n        <Y>322</Y>\n        <Item>MS</Item>\n        <Difficulty>3</Difficulty>\n        <Zone>Sorrow</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n    </Connections>\n  </Area>\n  <Area name="SorrowHealth">\n    <Locations>\n      <Location>\n        <X>-609</X>\n        <Y>299</Y>\n        <Item>HC</Item>\n        <Difficulty>3</Difficulty>\n        <Zone>Sorrow</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n    </Connections>\n  </Area>\n  <Area name="LeftSorrow">\n    <Locations>\n      <Location>\n        <X>-671</X>\n        <Y>289</Y>\n        <Item>AC</Item>\n        <Difficulty>2</Difficulty>\n        <Zone>Sorrow</Zone>\n      </Location>\n      <Location>\n        <X>-608</X>\n        <Y>329</Y>\n        <Item>KS</Item>\n        <Difficulty>2</Difficulty>\n        <Zone>Sorrow</Zone>\n      </Location>\n      <Location>\n        <X>-612</X>\n        <Y>347</Y>\n        <Item>KS</Item>\n        <Difficulty>3</Difficulty>\n        <Zone>Sorrow</Zone>\n      </Location>\n      <Location>\n        <X>-604</X>\n        <Y>361</Y>\n        <Item>KS</Item>\n        <Difficulty>3</Difficulty>\n        <Zone>Sorrow</Zone>\n      </Location>\n      <Location>\n        <X>-613</X>\n        <Y>371</Y>\n        <Item>KS</Item>\n        <Difficulty>3</Difficulty>\n        <Zone>Sorrow</Zone>\n      </Location>\n      <Location>\n        <X>-627</X>\n        <Y>393</Y>\n        <Item>EC</Item>\n        <Difficulty>3</Difficulty>\n        <Zone>Sorrow</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n      <Connection>\n        <Home name="LeftSorrow"/>\n        <Target name="LeftSorrowGrenade"/>\n        <Requirements>\n          <Requirement mode="normal">Grenade</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="LeftSorrow"/>\n        <Target name="UpperSorrow"/>\n        <Requirements>\n          <Requirement mode="normal">KS+KS+KS+KS</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="LeftSorrow"/>\n        <Target name="LeftSorrowPlant"/>\n        <Requirements>\n          <Requirement mode="normal">ChargeFlame</Requirement>\n          <Requirement mode="normal">Grenade</Requirement>\n          <Requirement mode="cdash">Dash</Requirement>\n        </Requirements>\n      </Connection>\n    </Connections>\n  </Area>\n  <Area name="LeftSorrowPlant">\n    <Locations>\n      <Location>\n        <X>-630</X>\n        <Y>249</Y>\n        <Item>Plant</Item>\n        <Difficulty>2</Difficulty>\n        <Zone>Sorrow</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n    </Connections>\n  </Area>\n  <Area name="LeftSorrowGrenade">\n    <Locations>\n      <Location>\n        <X>-677</X>\n        <Y>269</Y>\n        <Item>EX200</Item>\n        <Difficulty>4</Difficulty>\n        <Zone>Sorrow</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n    </Connections>\n  </Area>\n  <Area name="UpperSorrow">\n    <Locations>\n      <Location>\n        <X>-456</X>\n        <Y>419</Y>\n        <Item>KS</Item>\n        <Difficulty>3</Difficulty>\n        <Zone>Sorrow</Zone>\n      </Location>\n      <Location>\n        <X>-414</X>\n        <Y>429</Y>\n        <Item>KS</Item>\n        <Difficulty>3</Difficulty>\n        <Zone>Sorrow</Zone>\n      </Location>\n      <Location>\n        <X>-514</X>\n        <Y>427</Y>\n        <Item>KS</Item>\n        <Difficulty>1</Difficulty>\n        <Zone>Sorrow</Zone>\n      </Location>\n      <Location>\n        <X>-545</X>\n        <Y>409</Y>\n        <Item>EX100</Item>\n        <Difficulty>1</Difficulty>\n        <Zone>Sorrow</Zone>\n      </Location>\n      <Location>\n        <X>-592</X>\n        <Y>445</Y>\n        <Item>KS</Item>\n        <Difficulty>2</Difficulty>\n        <Zone>Sorrow</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n      <Connection>\n        <Home name="UpperSorrow"/>\n        <Target name="ChargeJump"/>\n        <Requirements>\n          <Requirement mode="normal">KS+KS+KS+KS</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="UpperSorrow"/>\n        <Target name="Sorrow"/>\n        <Requirements>\n          <Requirement mode="normal">Stomp</Requirement>\n          <Requirement mode="extended">Climb+ChargeJump</Requirement>\n        </Requirements>\n      </Connection>\n    </Connections>\n  </Area>\n  <Area name="ChargeJump">\n    <Locations>\n      <Location>\n        <X>-696</X>\n        <Y>408</Y>\n        <Item>SKChargeJump</Item>\n        <Difficulty>2</Difficulty>\n        <Zone>Sorrow</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n      <Connection>\n        <Home name="ChargeJump"/>\n        <Target name="Sunstone"/>\n        <Requirements>\n          <Requirement mode="normal">ChargeJump+Climb</Requirement>\n          <Requirement mode="extended">Bash+Glide</Requirement>\n          <Requirement mode="extended">Bash+Dash</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="ChargeJump"/>\n        <Target name="AboveChargeJump"/>\n        <Requirements>\n          <Requirement mode="normal">ChargeJump</Requirement>\n        </Requirements>\n      </Connection>\n    </Connections>\n  </Area>\n  <Area name="AboveChargeJump">\n    <Locations>\n      <Location>\n        <X>-646</X>\n        <Y>473</Y>\n        <Item>AC</Item>\n        <Difficulty>5</Difficulty>\n        <Zone>Sorrow</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n    </Connections>\n  </Area>\n  <Area name="Sunstone">\n    <Locations>\n      <Location>\n        <X>0</X>\n        <Y>16</Y>\n        <Item>EVHoruKey</Item>\n        <Difficulty>4</Difficulty>\n        <Zone>Sorrow</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n      <Connection>\n        <Home name="Sunstone"/>\n        <Target name="SunstonePlant"/>\n        <Requirements>\n          <Requirement mode="normal">ChargeFlame</Requirement>\n          <Requirement mode="normal">Grenade</Requirement>\n          <Requirement mode="cdash">Dash</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="Sunstone"/>\n        <Target name="UpperSorrow"/>\n        <Requirements>\n          <Requirement mode="normal">Stomp</Requirement>\n          <Requirement mode="extended">Climb+ChargeJump</Requirement>\n        </Requirements>\n      </Connection>\n    </Connections>\n  </Area>\n  <Area name="SunstonePlant">\n    <Locations>\n      <Location>\n        <X>-478</X>\n        <Y>586</Y>\n        <Item>Plant</Item>\n        <Difficulty>4</Difficulty>\n        <Zone>Sorrow</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n    </Connections>\n  </Area>\n  <Area name="Misty">\n    <Locations>\n      <Location>\n        <X>-979</X>\n        <Y>23</Y>\n        <Item>EX100</Item>\n        <Difficulty>1</Difficulty>\n        <Zone>Misty</Zone>\n      </Location>\n      <Location>\n        <X>-1075</X>\n        <Y>-2</Y>\n        <Item>AC</Item>\n        <Difficulty>1</Difficulty>\n        <Zone>Misty</Zone>\n      </Location>\n      <Location>\n        <X>-1082</X>\n        <Y>8</Y>\n        <Item>EX100</Item>\n        <Difficulty>2</Difficulty>\n        <Zone>Misty</Zone>\n      </Location>\n      <Location>\n        <X>-1009</X>\n        <Y>-35</Y>\n        <Item>EX100</Item>\n        <Difficulty>1</Difficulty>\n        <Zone>Misty</Zone>\n      </Location>\n      <Location>\n        <X>-1076</X>\n        <Y>32</Y>\n        <Item>KS</Item>\n        <Difficulty>1</Difficulty>\n        <Zone>Misty</Zone>\n      </Location>\n      <Location>\n        <X>-1188</X>\n        <Y>-100</Y>\n        <Item>SKClimb</Item>\n        <Difficulty>1</Difficulty>\n        <Zone>Misty</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n      <Connection>\n        <Home name="Misty"/>\n        <Target name="MistyPostClimb"/>\n        <Requirements>\n          <Requirement mode="normal">Climb+DoubleJump</Requirement>\n          <Requirement mode="normal">ChargeJump</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="Misty"/>\n        <Target name="MistyPlant"/>\n        <Requirements>\n          <Requirement mode="normal">ChargeFlame</Requirement>\n          <Requirement mode="normal">Grenade</Requirement>\n          <Requirement mode="cdash">Dash</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="Misty"/>\n        <Target name="Forlorn"/>\n        <Requirements>\n          <Requirement mode="glitched">Free</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="Misty"/>\n        <Target name="RightForlorn"/>\n        <Requirements>\n          <Requirement mode="glitched">Free</Requirement>\n        </Requirements>\n      </Connection>\n    </Connections>\n  </Area>\n  <Area name="MistyPlant">\n    <Locations>\n      <Location>\n        <X>-1102</X>\n        <Y>-67</Y>\n        <Item>Plant</Item>\n        <Difficulty>2</Difficulty>\n        <Zone>Misty</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n    </Connections>\n  </Area>\n  <Area name="MistyPostClimb">\n    <Locations>\n      <Location>\n        <X>-837</X>\n        <Y>-123</Y>\n        <Item>EX100</Item>\n        <Difficulty>1</Difficulty>\n        <Zone>Misty</Zone>\n      </Location>\n      <Location>\n        <X>-796</X>\n        <Y>-144</Y>\n        <Item>EX200</Item>\n        <Difficulty>1</Difficulty>\n        <Zone>Misty</Zone>\n      </Location>\n      <Location>\n        <X>-912</X>\n        <Y>-36</Y>\n        <Item>KS</Item>\n        <Difficulty>1</Difficulty>\n        <Zone>Misty</Zone>\n      </Location>\n      <Location>\n        <X>-768</X>\n        <Y>-144</Y>\n        <Item>KS</Item>\n        <Difficulty>1</Difficulty>\n        <Zone>Misty</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n      <Connection>\n        <Home name="MistyPostClimb"/>\n        <Target name="MistyEndGrenade"/>\n        <Requirements>\n          <Requirement mode="normal">Grenade</Requirement>\n        </Requirements>\n      </Connection>\n      <Connection>\n        <Home name="MistyPostClimb"/>\n        <Target name="MistyEnd"/>\n        <Requirements>\n          <Requirement mode="normal">KS+KS+KS+KS</Requirement>\n        </Requirements>\n      </Connection>\n    </Connections>\n  </Area>\n  <Area name="MistyEnd">\n    <Locations>\n      <Location>\n        <X>0</X>\n        <Y>8</Y>\n        <Item>EVForlornKey</Item>\n        <Difficulty>3</Difficulty>\n        <Zone>Misty</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n    </Connections>\n  </Area>\n  <Area name="MistyEndGrenade">\n    <Locations>\n      <Location>\n        <X>-671</X>\n        <Y>-39</Y>\n        <Item>EX200</Item>\n        <Difficulty>5</Difficulty>\n        <Zone>Misty</Zone>\n      </Location>\n    </Locations>\n    <Connections>\n    </Connections>\n  </Area>\n</Areas>\n'['$$split']('\n');
		i = 0;
		while ($p['bool'](($p['cmp'](i, $p['len'](lines)) == -1))) {
			match = $m['re']['match']('.*<Area name="(.+)".*', lines.__getitem__(i));
			if ($p['bool'](match)) {
				area = $m['Area'](match['group'](1));
				$m['areaList']['append'](match['group'](1));
				i = $p['__op_add']($add271=i,$add272=1);
				continue;
			}
			match = $m['re']['match']('.*<Location>.*', lines.__getitem__(i));
			if ($p['bool'](match)) {
				loc = $m['Location']($p['float_int']($m['selectText']('<X>', '</X>', lines.__getitem__($p['__op_add']($add273=i,$add274=1)))), $p['float_int']($m['selectText']('<Y>', '</Y>', lines.__getitem__($p['__op_add']($add275=i,$add276=2)))), $p['getattr'](area, '$$name'), $m['selectText']('<Item>', '</Item>', lines.__getitem__($p['__op_add']($add277=i,$add278=3))), $p['float_int']($m['selectText']('<Difficulty>', '</Difficulty>', lines.__getitem__($p['__op_add']($add279=i,$add280=4)))), $m['selectText']('<Zone>', '</Zone>', lines.__getitem__($p['__op_add']($add281=i,$add282=5))));
				i = $p['__op_add']($add283=i,$add284=6);
				if ($p['bool'](!$p['bool'](includePlants))) {
					if ($p['bool']($m['re']['match']('.*Plant.*', $p['getattr'](area, '$$name')))) {
						plants['append'](loc);
						continue;
					}
				}
				area['add_location'](loc);
				continue;
			}
			match = $m['re']['match']('.*<Connection>.*', lines.__getitem__(i));
			if ($p['bool'](match)) {
				match2 = $m['re']['match']('.*<Entrance/>.*', lines.__getitem__($p['__op_add']($add285=i,$add286=1)));
				if ($p['bool'](match2)) {
					i = $p['__op_add']($add287=i,$add288=1);
					if ($p['bool'](entrance)) {
						continue;
					}
				}
				connection = $m['Connection']($m['selectText']('"', '"', lines.__getitem__($p['__op_add']($add289=i,$add290=1))), $m['selectText']('"', '"', lines.__getitem__($p['__op_add']($add291=i,$add292=2))));
				i = $p['__op_add']($add293=i,$add294=4);
				if ($p['bool'](!$p['bool'](includePlants))) {
					if ($p['bool']($m['re']['match']('.*Plant.*', $p['getattr'](connection, 'target')))) {
						currentConnection = null;
						continue;
					}
				}
				currentConnection = connection;
				continue;
			}
			match = $m['re']['match']('.*<Requirement mode=.*', lines.__getitem__(i));
			if ($p['bool'](($p['bool']($and27=match)?currentConnection:$and27))) {
				mode = $m['selectText']('"', '"', lines.__getitem__(i));
				if ($p['bool'](modes.__contains__(mode))) {
					currentConnection['add_requirements']($m['selectText']('>', '</Requirement>', lines.__getitem__(i))['$$split']('+'), difficultyMap.__getitem__(mode));
				}
				i = $p['__op_add']($add295=i,$add296=1);
				continue;
			}
			match = $m['re']['match']('.*</Requirements>.*', lines.__getitem__(i));
			if ($p['bool'](($p['bool']($and29=match)?currentConnection:$and29))) {
				area['add_connection'](currentConnection);
				i = $p['__op_add']($add297=i,$add298=1);
				continue;
			}
			match = $m['re']['match']('.*</Area>.*', lines.__getitem__(i));
			if ($p['bool'](match)) {
				$m['areas'].__setitem__($p['getattr'](area, '$$name'), area);
				i = $p['__op_add']($add299=i,$add300=1);
				continue;
			}
			i = $p['__op_add']($add301=i,$add302=1);
		}
		$m['outputStr'] = $p['__op_add']($add309=$m['outputStr'],$add310=$p['__op_add']($add307=$p['__op_add']($add305=$p['__op_add']($add303=flags,$add304='|'),$add306=$p['str'](seed)),$add308='\r\n'));
		if ($p['bool'](entrance)) {
			$m['outputStr'] = $p['__op_add']($add311=$m['outputStr'],$add312=$m['randomize_entrances']($m['areas']));
		}
		$m['outputStr'] = $p['__op_add']($add313=$m['outputStr'],$add314='-280256|EC|1|Glades\r\n');
		$m['outputStr'] = $p['__op_add']($add315=$m['outputStr'],$add316='-1680104|EX|100|Grove\r\n');
		$m['outputStr'] = $p['__op_add']($add317=$m['outputStr'],$add318='-12320248|EX|100|Forlorn\r\n');
		$m['outputStr'] = $p['__op_add']($add319=$m['outputStr'],$add320='-10440008|EX|100|Misty\r\n');
		if ($p['bool'](!$p['bool'](includePlants))) {
			$iter26_iter = plants;
			$iter26_nextval=$p['__iter_prepare']($iter26_iter,false);
			while (typeof($p['__wrapped_next']($iter26_nextval).$nextval) != 'undefined') {
				location = $iter26_nextval.$nextval;
				$m['outputStr'] = $p['__op_add']($add323=$m['outputStr'],$add324=$p['__op_add']($add321=$p['str'](location['get_key']()),$add322='|NO|0\r\n'));
			}
		}
		locationsToAssign = $p['list']([]);
		$m['connectionQueue'] = $p['list']([]);
		$m['reservedLocations'] = $p['list']([]);
		$m['skillCount'] = 10;
		$m['mapstonesAssigned'] = 0;
		$m['expSlots'] = $m['itemPool'].__getitem__('EX*');
		$m['spoilerGroup'] = $p['dict']([['MS', $p['list']([])], ['KS', $p['list']([])], ['EC', $p['list']([])], ['HC', $p['list']([])]]);
		$m['doorQueue'] = $p['dict']([]);
		$m['mapQueue'] = $p['dict']([]);
		spoilerPath = '';
		$m['reach_area']('SunkenGladesRunaway');
		while ($p['bool'](($p['bool']($or14=($p['cmp']($m['itemCount'], 0) == 1))?$or14:($p['bool']($and31=$m['balanced'])?$m['balanceListLeftovers']:$and31)))) {
			$m['balanceLevel'] = $p['__op_add']($add325=$m['balanceLevel'],$add326=1);
			opening = true;
			while ($p['bool'](opening)) {
				var $tupleassign1 = $p['__ass_unpack']($m['open_free_connections'](), 3, null);
				opening = $tupleassign1[0];
				keys = $tupleassign1[1];
				mapstones = $tupleassign1[2];
				keystoneCount = $p['__op_add']($add327=keystoneCount,$add328=keys);
				mapstoneCount = $p['__op_add']($add329=mapstoneCount,$add330=mapstones);
				if ($p['bool']($p['op_eq'](mapstoneCount, 8))) {
					mapstoneCount = 9;
				}
				if ($p['bool']($p['op_eq'](mapstoneCount, 10))) {
					mapstoneCount = 11;
				}
				$iter27_iter = $m['connectionQueue'];
				$iter27_nextval=$p['__iter_prepare']($iter27_iter,false);
				while (typeof($p['__wrapped_next']($iter27_nextval).$nextval) != 'undefined') {
					connection = $iter27_nextval.$nextval;
					$m['areas'].__getitem__(connection.__getitem__(0))['remove_connection'](connection.__getitem__(1));
				}
				$m['connectionQueue'] = $p['list']([]);
			}
			locationsToAssign = $m['get_all_accessible_locations']();
			if ($p['bool'](($p['bool']($and33=!$p['bool']($m['doorQueue']))?!$p['bool']($m['mapQueue']):$and33))) {
				spoilerPath = $m['prepare_path']($p['len'](locationsToAssign));
				if ($p['bool'](!$p['bool']($m['assignQueue']))) {
					if ($p['bool'](!$p['bool']($m['reservedLocations']))) {
						if ($p['bool']($p['op_eq']($m['playerID'], 1))) {
							$m['sharedMap'] = $p['dict']([]);
						}
						if ($p['bool'](($p['cmp'](depth, (typeof ($mul45=$m['playerCount'])==typeof ($mul46=$m['playerCount']) && typeof $mul45=='number'?
							$mul45*$mul46:
							$p['op_mul']($mul45,$mul46))) == 1))) {
							return null;
						}
						return $m['placeItems'](seed, expPool, hardMode, includePlants, shardsMode, limitkeysMode, cluesMode, noTeleporters, modes, flags, starvedMode, preferPathDifficulty, setNonProgressiveMapstones, $m['playerCount'], $m['playerID'], $m['balanced'], entrance, $p['__op_add']($add331=depth,$add332=1));
					}
					locationsToAssign['append']($m['reservedLocations']['pop'](0));
					locationsToAssign['append']($m['reservedLocations']['pop'](0));
					spoilerPath = $m['prepare_path']($p['len'](locationsToAssign));
				}
				if ($p['bool']($m['balanced'])) {
					$iter28_iter = $m['assignQueue'];
					$iter28_nextval=$p['__iter_prepare']($iter28_iter,false);
					while (typeof($p['__wrapped_next']($iter28_nextval).$nextval) != 'undefined') {
						item = $iter28_nextval.$nextval;
						if ($p['bool']($p['op_eq']($p['len']($m['balanceList']), 0))) {
							break;
						}
						locationsToAssign['append']($m['get_location_from_balance_list']());
					}
				}
			}
			itemsToAssign = $p['list']([]);
			if ($p['bool'](($p['cmp']($p['len'](locationsToAssign), $p['__op_add']($add335=$p['__op_add']($add333=$p['len']($m['assignQueue']),$add334=$p['max']($p['__op_sub']($sub43=keystoneCount,$sub44=$m['inventory'].__getitem__('KS')), 0)),$add336=$p['max']($p['__op_sub']($sub45=mapstoneCount,$sub46=$m['inventory'].__getitem__('MS')), 0))) == -1))) {
				if ($p['bool'](!$p['bool']($m['reservedLocations']))) {
					if ($p['bool']($p['op_eq']($m['playerID'], 1))) {
						$m['sharedMap'] = $p['dict']([]);
					}
					if ($p['bool'](($p['cmp'](depth, (typeof ($mul47=$m['playerCount'])==typeof ($mul48=$m['playerCount']) && typeof $mul47=='number'?
						$mul47*$mul48:
						$p['op_mul']($mul47,$mul48))) == 1))) {
						return null;
					}
					return $m['placeItems'](seed, expPool, hardMode, includePlants, shardsMode, limitkeysMode, cluesMode, noTeleporters, modes, flags, starvedMode, preferPathDifficulty, setNonProgressiveMapstones, $m['playerCount'], $m['playerID'], $m['balanced'], entrance, $p['__op_add']($add337=depth,$add338=1));
				}
				locationsToAssign['append']($m['reservedLocations']['pop'](0));
				locationsToAssign['append']($m['reservedLocations']['pop'](0));
			}
			$iter29_iter = $p['range'](0, $p['len'](locationsToAssign));
			$iter29_nextval=$p['__iter_prepare']($iter29_iter,false);
			while (typeof($p['__wrapped_next']($iter29_nextval).$nextval) != 'undefined') {
				i = $iter29_nextval.$nextval;
				if ($p['bool']($m['assignQueue'])) {
					itemsToAssign['append']($m['assign']($m['assignQueue']['pop'](0)));
				}
				else if ($p['bool'](($p['cmp']($m['inventory'].__getitem__('KS'), keystoneCount) == -1))) {
					itemsToAssign['append']($m['assign']('KS'));
				}
				else if ($p['bool'](($p['cmp']($m['inventory'].__getitem__('MS'), mapstoneCount) == -1))) {
					itemsToAssign['append']($m['assign']('MS'));
				}
				else if ($p['bool'](($p['bool']($and35=$m['balanced'])?$p['op_eq']($m['itemCount'], 0):$and35))) {
					itemsToAssign['append']($m['balanceListLeftovers']['pop'](0));
					$m['itemCount'] = $p['__op_add']($add339=$m['itemCount'],$add340=1);
				}
				else {
					itemsToAssign['append']($m['assign_random']());
				}
				$m['itemCount'] = $p['__op_sub']($sub47=$m['itemCount'],$sub48=1);
			}
			if ($p['bool']($m['pathDifficulty'])) {
				$iter30_iter = $p['list'](itemsToAssign);
				$iter30_nextval=$p['__iter_prepare']($iter30_iter,false);
				while (typeof($p['__wrapped_next']($iter30_nextval).$nextval) != 'undefined') {
					item = $iter30_nextval.$nextval;
					if ($p['bool'](($p['bool']($or16=$m['skillsOutput'].__contains__(item))?$or16:$m['eventsOutput'].__contains__(item)))) {
						$m['preferred_difficulty_assign'](item, locationsToAssign);
						itemsToAssign['remove'](item);
					}
				}
			}
			$m.random['shuffle'](itemsToAssign);
			$iter31_iter = $p['range'](0, $p['len'](locationsToAssign));
			$iter31_nextval=$p['__iter_prepare']($iter31_iter,false);
			while (typeof($p['__wrapped_next']($iter31_nextval).$nextval) != 'undefined') {
				i = $iter31_nextval.$nextval;
				$m['assign_to_location'](itemsToAssign.__getitem__(i), locationsToAssign.__getitem__(i));
			}
			currentGroupSpoiler = '';
			if ($p['bool'](spoilerPath)) {
				currentGroupSpoiler = $p['__op_add']($add345=currentGroupSpoiler,$add346=$p['__op_add']($add343=$p['__op_add']($add341='    Forced pickups: ',$add342=$p['str'](spoilerPath)),$add344='\r\n'));
			}
			$iter32_iter = $m['skillsOutput'];
			$iter32_nextval=$p['__iter_prepare']($iter32_iter,false);
			while (typeof($p['__wrapped_next']($iter32_nextval).$nextval) != 'undefined') {
				skill = $iter32_nextval.$nextval;
				if ($p['bool']($m['spoilerGroup'].__contains__(skill))) {
					$iter33_iter = $m['spoilerGroup'].__getitem__(skill);
					$iter33_nextval=$p['__iter_prepare']($iter33_iter,false);
					while (typeof($p['__wrapped_next']($iter33_nextval).$nextval) != 'undefined') {
						instance = $iter33_nextval.$nextval;
						currentGroupSpoiler = $p['__op_add']($add349=currentGroupSpoiler,$add350=$p['__op_add']($add347='    ',$add348=instance));
					}
					if ($p['bool'](seedDifficultyMap.__contains__(skill))) {
						$m['seedDifficulty'] = $p['__op_add']($add351=$m['seedDifficulty'],$add352=(typeof ($mul49=groupDepth)==typeof ($mul50=seedDifficultyMap.__getitem__(skill)) && typeof $mul49=='number'?
							$mul49*$mul50:
							$p['op_mul']($mul49,$mul50)));
					}
				}
			}
			$iter34_iter = $m['eventsOutput'];
			$iter34_nextval=$p['__iter_prepare']($iter34_iter,false);
			while (typeof($p['__wrapped_next']($iter34_nextval).$nextval) != 'undefined') {
				event = $iter34_nextval.$nextval;
				if ($p['bool']($m['spoilerGroup'].__contains__(event))) {
					$iter35_iter = $m['spoilerGroup'].__getitem__(event);
					$iter35_nextval=$p['__iter_prepare']($iter35_iter,false);
					while (typeof($p['__wrapped_next']($iter35_nextval).$nextval) != 'undefined') {
						instance = $iter35_nextval.$nextval;
						currentGroupSpoiler = $p['__op_add']($add355=currentGroupSpoiler,$add356=$p['__op_add']($add353='    ',$add354=instance));
					}
				}
			}
			$iter36_iter = $m['spoilerGroup'];
			$iter36_nextval=$p['__iter_prepare']($iter36_iter,false);
			while (typeof($p['__wrapped_next']($iter36_nextval).$nextval) != 'undefined') {
				key = $iter36_nextval.$nextval;
				if ($p['bool']($p['op_eq']($p['__getslice'](key, 0, 2), 'TP'))) {
					$iter37_iter = $m['spoilerGroup'].__getitem__(key);
					$iter37_nextval=$p['__iter_prepare']($iter37_iter,false);
					while (typeof($p['__wrapped_next']($iter37_nextval).$nextval) != 'undefined') {
						instance = $iter37_nextval.$nextval;
						currentGroupSpoiler = $p['__op_add']($add359=currentGroupSpoiler,$add360=$p['__op_add']($add357='    ',$add358=instance));
					}
				}
			}
			$iter38_iter = $m['spoilerGroup'].__getitem__('MS');
			$iter38_nextval=$p['__iter_prepare']($iter38_iter,false);
			while (typeof($p['__wrapped_next']($iter38_nextval).$nextval) != 'undefined') {
				instance = $iter38_nextval.$nextval;
				currentGroupSpoiler = $p['__op_add']($add363=currentGroupSpoiler,$add364=$p['__op_add']($add361='    ',$add362=instance));
			}
			$iter39_iter = $m['spoilerGroup'].__getitem__('KS');
			$iter39_nextval=$p['__iter_prepare']($iter39_iter,false);
			while (typeof($p['__wrapped_next']($iter39_nextval).$nextval) != 'undefined') {
				instance = $iter39_nextval.$nextval;
				currentGroupSpoiler = $p['__op_add']($add367=currentGroupSpoiler,$add368=$p['__op_add']($add365='    ',$add366=instance));
			}
			$iter40_iter = $m['spoilerGroup'].__getitem__('HC');
			$iter40_nextval=$p['__iter_prepare']($iter40_iter,false);
			while (typeof($p['__wrapped_next']($iter40_nextval).$nextval) != 'undefined') {
				instance = $iter40_nextval.$nextval;
				currentGroupSpoiler = $p['__op_add']($add371=currentGroupSpoiler,$add372=$p['__op_add']($add369='    ',$add370=instance));
			}
			$iter41_iter = $m['spoilerGroup'].__getitem__('EC');
			$iter41_nextval=$p['__iter_prepare']($iter41_iter,false);
			while (typeof($p['__wrapped_next']($iter41_nextval).$nextval) != 'undefined') {
				instance = $iter41_nextval.$nextval;
				currentGroupSpoiler = $p['__op_add']($add375=currentGroupSpoiler,$add376=$p['__op_add']($add373='    ',$add374=instance));
			}
			if ($p['bool'](currentGroupSpoiler)) {
				groupDepth = $p['__op_add']($add377=groupDepth,$add378=1);
				$m['currentAreas']['sort']();
				spoilerStr = $p['__op_add']($add385=spoilerStr,$add386=$p['__op_add']($add383=$p['__op_add']($add381=$p['__op_add']($add379=$p['str'](groupDepth),$add380=': '),$add382=$p['str']($m['currentAreas'])),$add384=' {\r\n'));
				spoilerStr = $p['__op_add']($add387=spoilerStr,$add388=currentGroupSpoiler);
				spoilerStr = $p['__op_add']($add389=spoilerStr,$add390='}\r\n');
			}
			$m['currentAreas'] = $p['list']([]);
			$iter42_iter = $m['doorQueue']['keys']();
			$iter42_nextval=$p['__iter_prepare']($iter42_iter,false);
			while (typeof($p['__wrapped_next']($iter42_nextval).$nextval) != 'undefined') {
				area = $iter42_nextval.$nextval;
				if ($p['bool'](!$m['areasReached'].__contains__($p['getattr']($m['doorQueue'].__getitem__(area), 'target')))) {
					difficulty = $m['doorQueue'].__getitem__(area)['cost']().__getitem__(2);
					$m['seedDifficulty'] = $p['__op_add']($add391=$m['seedDifficulty'],$add392=(typeof ($mul51=difficulty)==typeof ($mul52=difficulty) && typeof $mul51=='number'?
						$mul51*$mul52:
						$p['op_mul']($mul51,$mul52)));
				}
				$m['reach_area']($p['getattr']($m['doorQueue'].__getitem__(area), 'target'));
				$m['areas'].__getitem__(area)['remove_connection']($m['doorQueue'].__getitem__(area));
			}
			$iter43_iter = $m['mapQueue']['keys']();
			$iter43_nextval=$p['__iter_prepare']($iter43_iter,false);
			while (typeof($p['__wrapped_next']($iter43_nextval).$nextval) != 'undefined') {
				area = $iter43_nextval.$nextval;
				if ($p['bool'](!$m['areasReached'].__contains__($p['getattr']($m['mapQueue'].__getitem__(area), 'target')))) {
					difficulty = $m['mapQueue'].__getitem__(area)['cost']().__getitem__(2);
					$m['seedDifficulty'] = $p['__op_add']($add393=$m['seedDifficulty'],$add394=(typeof ($mul53=difficulty)==typeof ($mul54=difficulty) && typeof $mul53=='number'?
						$mul53*$mul54:
						$p['op_mul']($mul53,$mul54)));
				}
				$m['reach_area']($p['getattr']($m['mapQueue'].__getitem__(area), 'target'));
				$m['areas'].__getitem__(area)['remove_connection']($m['mapQueue'].__getitem__(area));
			}
			locationsToAssign = $p['list']([]);
			$m['spoilerGroup'] = $p['dict']([['MS', $p['list']([])], ['KS', $p['list']([])], ['EC', $p['list']([])], ['HC', $p['list']([])]]);
			$m['doorQueue'] = $p['dict']([]);
			$m['mapQueue'] = $p['dict']([]);
			spoilerPath = '';
		}
		if ($p['bool']($m['balanced'])) {
			$iter44_iter = $m['balanceList'];
			$iter44_nextval=$p['__iter_prepare']($iter44_iter,false);
			while (typeof($p['__wrapped_next']($iter44_nextval).$nextval) != 'undefined') {
				item = $iter44_nextval.$nextval;
				$m['outputStr'] = $p['__op_add']($add395=$m['outputStr'],$add396=item.__getitem__(2));
			}
		}
		spoilerStr = $p['__op_add']($add409=$p['__op_add']($add407=$p['__op_add']($add405=$p['__op_add']($add403=$p['__op_add']($add401=$p['__op_add']($add399=$p['__op_add']($add397=flags,$add398='|'),$add400=$p['str'](seed)),$add402='\r\n'),$add404='Difficulty Rating: '),$add406=$p['str']($m['seedDifficulty'])),$add408='\r\n'),$add410=spoilerStr);
		$m.random['shuffle']($m['eventList']);
		$iter45_iter = $m['eventList'];
		$iter45_nextval=$p['__iter_prepare']($iter45_iter,false);
		while (typeof($p['__wrapped_next']($iter45_nextval).$nextval) != 'undefined') {
			event = $iter45_nextval.$nextval;
			$m['outputStr'] = $p['__op_add']($add411=$m['outputStr'],$add412=event);
		}
		return $p['tuple']([$m['outputStr'], spoilerStr]);
	};
	$m['placeItems'].__name__ = 'placeItems';

	$m['placeItems'].__bind_type__ = 0;
	$m['placeItems'].__args__ = [null,null,['seed'],['expPool'],['hardMode'],['includePlants'],['shardsMode'],['limitkeysMode'],['cluesMode'],['noTeleporters'],['modes'],['flags'],['starvedMode'],['preferPathDifficulty'],['setNonProgressiveMapstones'],['playerCountIn'],['playerIDIn'],['balancedIn'],['entrance'],['depth', 0]];
	$m['pyjd'] = $p['___import___']('pyjd', null);
	$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', null, null, false);
	$m['VerticalPanel'] = $p['___import___']('pyjamas.ui.VerticalPanel.VerticalPanel', null, null, false);
	$m['HorizontalPanel'] = $p['___import___']('pyjamas.ui.HorizontalPanel.HorizontalPanel', null, null, false);
	$m['DisclosurePanel'] = $p['___import___']('pyjamas.ui.DisclosurePanel.DisclosurePanel', null, null, false);
	$m['HasAlignment'] = $p['___import___']('pyjamas.ui.HasAlignment', null, null, false);
	$m['Button'] = $p['___import___']('pyjamas.ui.Button.Button', null, null, false);
	$m['RadioButton'] = $p['___import___']('pyjamas.ui.RadioButton.RadioButton', null, null, false);
	$m['CheckBox'] = $p['___import___']('pyjamas.ui.CheckBox.CheckBox', null, null, false);
	$m['HTML'] = $p['___import___']('pyjamas.ui.HTML.HTML', null, null, false);
	$m['ListBox'] = $p['___import___']('pyjamas.ui.ListBox.ListBox', null, null, false);
	$m['TextBox'] = $p['___import___']('pyjamas.ui.TextBox.TextBox', null, null, false);
	$m['DOM'] = $p['___import___']('pyjamas.DOM', null, null, false);
	$m['LogicListener'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'web_seed_generator';
		$method = $pyjs__bind_method2('__init__', function(element) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				element = arguments[1];
			}

			element['addChangeListener'](self);
			return null;
		}
	, 1, [null,null,['self'],['element']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('onChange', function(sender) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			var index;
			index = sender['getSelectedIndex']();
			$m.pathNormal['setChecked'](true);
			$m.pathSpeed['setChecked'](false);
			$m.pathDBoostLight['setChecked'](false);
			$m.pathDBoost['setChecked'](false);
			$m.pathDBoostHard['setChecked'](false);
			$m.pathLure['setChecked'](false);
			$m.pathSpeedLure['setChecked'](false);
			$m.pathLureHard['setChecked'](false);
			$m.pathDBash['setChecked'](false);
			$m.pathCDash['setChecked'](false);
			$m.pathCDashFarming['setChecked'](false);
			$m.pathExtended['setChecked'](false);
			$m.pathExtendedDamage['setChecked'](false);
			$m.pathExtreme['setChecked'](false);
			$m.pathTimedLevel['setChecked'](false);
			$m.pathGlitched['setChecked'](false);
			$m.diffSelection['setSelectedIndex'](1);
			$m.hardBox['setChecked'](false);
			$m.starvedBox['setChecked'](false);
			$m.ohkoBox['setChecked'](false);
			$m.zeroBox['setChecked'](false);
			$m.noPlantsBox['setChecked'](false);
			if ($p['bool']($p['op_eq'](index, 0))) {
				$m.pathDBoostLight['setChecked'](true);
			}
			else if ($p['bool']($p['op_eq'](index, 1))) {
				$m.pathSpeed['setChecked'](true);
				$m.pathDBoostLight['setChecked'](true);
				$m.pathLure['setChecked'](true);
			}
			else if ($p['bool']($p['op_eq'](index, 2))) {
				$m.pathSpeed['setChecked'](true);
				$m.pathDBoostLight['setChecked'](true);
				$m.pathDBoost['setChecked'](true);
				$m.pathLure['setChecked'](true);
				$m.pathSpeedLure['setChecked'](true);
				$m.pathCDash['setChecked'](true);
				$m.pathExtended['setChecked'](true);
				$m.pathExtendedDamage['setChecked'](true);
			}
			else if ($p['bool']($p['op_eq'](index, 3))) {
				$m.pathSpeed['setChecked'](true);
				$m.pathDBoostLight['setChecked'](true);
				$m.pathDBoost['setChecked'](true);
				$m.pathDBoostHard['setChecked'](true);
				$m.pathLure['setChecked'](true);
				$m.pathSpeedLure['setChecked'](true);
				$m.pathLureHard['setChecked'](true);
				$m.pathDBash['setChecked'](true);
				$m.pathCDash['setChecked'](true);
				$m.pathExtended['setChecked'](true);
				$m.pathExtendedDamage['setChecked'](true);
				$m.pathExtreme['setChecked'](true);
				$m.starvedBox['setChecked'](true);
				$m.diffSelection['setSelectedIndex'](2);
			}
			else if ($p['bool']($p['op_eq'](index, 4))) {
				$m.pathSpeed['setChecked'](true);
				$m.pathDBoostLight['setChecked'](true);
				$m.pathLure['setChecked'](true);
				$m.pathDBash['setChecked'](true);
				$m.pathCDash['setChecked'](true);
				$m.pathExtended['setChecked'](true);
				$m.hardBox['setChecked'](true);
			}
			else if ($p['bool']($p['op_eq'](index, 5))) {
				$m.pathSpeed['setChecked'](true);
				$m.pathLure['setChecked'](true);
				$m.pathDBash['setChecked'](true);
				$m.pathCDash['setChecked'](true);
				$m.pathExtended['setChecked'](true);
				$m.hardBox['setChecked'](true);
				$m.ohkoBox['setChecked'](true);
			}
			else if ($p['bool']($p['op_eq'](index, 6))) {
				$m.pathSpeed['setChecked'](true);
				$m.pathDBoostLight['setChecked'](true);
				$m.pathLure['setChecked'](true);
				$m.hardBox['setChecked'](true);
				$m.zeroBox['setChecked'](true);
			}
			else if ($p['bool']($p['op_eq'](index, 7))) {
				$m.pathSpeed['setChecked'](true);
				$m.pathDBoostLight['setChecked'](true);
				$m.pathDBoost['setChecked'](true);
				$m.pathDBoostHard['setChecked'](true);
				$m.pathLure['setChecked'](true);
				$m.pathSpeedLure['setChecked'](true);
				$m.pathLureHard['setChecked'](true);
				$m.pathDBash['setChecked'](true);
				$m.pathCDash['setChecked'](true);
				$m.pathCDashFarming['setChecked'](true);
				$m.pathExtended['setChecked'](true);
				$m.pathExtendedDamage['setChecked'](true);
				$m.pathExtreme['setChecked'](true);
				$m.pathTimedLevel['setChecked'](true);
				$m.pathGlitched['setChecked'](true);
				$m.diffSelection['setSelectedIndex'](2);
			}
			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onChange'] = $method;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('LogicListener', $p['tuple']($bases), $data);
	})();
	$m['CustomPathListener'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'web_seed_generator';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

 			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('onClick', function(sender) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			if (typeof sender == 'undefined') sender=arguments.callee.__args__[3][1];

			$m.logicSelection['setSelectedIndex'](8);
			return null;
		}
	, 1, [null,null,['self'],['sender', null]]);
		$cls_definition['onClick'] = $method;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('CustomPathListener', $p['tuple']($bases), $data);
	})();
	$m['seed_hash'] = function(seed) {
		var index,$iter46_array,$sub50,$add414,$add413,$iter46_iter,$iter46_nextval,$sub49,value,$iter46_idx,$iter46_type;
		value = 0;
		$iter46_iter = $p['range']($p['len'](seed));
		$iter46_nextval=$p['__iter_prepare']($iter46_iter,false);
		while (typeof($p['__wrapped_next']($iter46_nextval).$nextval) != 'undefined') {
			index = $iter46_nextval.$nextval;
			value = $p['__op_add']($add413=$p['__op_sub']($sub49=(value)<<(5),$sub50=value),$add414=$p['ord'](seed.__getitem__(index)));
		}
		return (4294967295)&(value);
	};
	$m['seed_hash'].__name__ = 'seed_hash';

	$m['seed_hash'].__bind_type__ = 0;
	$m['seed_hash'].__args__ = [null,null,['seed']];
	$m['generate'] = function() {
		var $add464,includePlants,no_teleporters,zeroxp,$add426,$add427,$add424,$add425,$add422,$add423,$add420,$add421,$add428,$add429,hard,sync_id,$mod7,$mod8,playerCountIn,$add453,$add452,$add451,$add450,$add457,$add456,$add455,$add454,$add459,$add458,mode,clues,force_trees,shards,$add440,$add441,$add442,$add443,$add444,$add445,$add446,$add447,$add448,$add449,prefer_path_difficulty,non_progressive_mapstones,exp_pool,balanced,limitkeys,nobonus,entrance,$add419,$add418,$add417,$add416,$add415,$add462,$add463,$add460,$add461,$add466,$add465,sharedSeedFlags,seed,$add439,$add438,$add431,$add430,$add433,$add432,$add435,$add434,$add437,$add436,$mul58,modes,ohko,$mul57,$mul56,$mul55,flags,starved,syncFlags;
		$m.genButton['setText']('Generating...');
		seed = $m.seedSelection['getText']();
		if ($p['bool']($p['op_eq'](seed, ''))) {
			seed = $p['str']((2147483647)&((typeof ($mul55=$m['time']['time']())==typeof ($mul56=1000) && typeof $mul55=='number'?
				$mul55*$mul56:
				$p['op_mul']($mul55,$mul56))));
		}
		hard = $m.hardBox['isChecked']();
		exp_pool = 10000;
		if ($p['bool'](hard)) {
			exp_pool = 5000;
		}
		includePlants = !$p['bool']($m.noPlantsBox['isChecked']());
		shards = $p['op_eq']($m.modeSelection['getSelectedIndex'](), 1);
		limitkeys = $p['op_eq']($m.modeSelection['getSelectedIndex'](), 2);
		clues = $p['op_eq']($m.modeSelection['getSelectedIndex'](), 3);
		no_teleporters = $m.noTeleBox['isChecked']();
		mode = $m.logicSelection['getItemText']($m.logicSelection['getSelectedIndex']());
		modes = $p['list']([]);
		if ($p['bool']($m.pathNormal['isChecked']())) {
			modes['append']('normal');
		}
		if ($p['bool']($m.pathSpeed['isChecked']())) {
			modes['append']('speed');
		}
		if ($p['bool']($m.pathDBoostLight['isChecked']())) {
			modes['append']('dboost-light');
		}
		if ($p['bool']($m.pathDBoost['isChecked']())) {
			modes['append']('dboost');
		}
		if ($p['bool']($m.pathDBoostHard['isChecked']())) {
			modes['append']('dboost-hard');
		}
		if ($p['bool']($m.pathLure['isChecked']())) {
			modes['append']('lure');
		}
		if ($p['bool']($m.pathSpeedLure['isChecked']())) {
			modes['append']('speed-lure');
		}
		if ($p['bool']($m.pathLureHard['isChecked']())) {
			modes['append']('lure-hard');
		}
		if ($p['bool']($m.pathDBash['isChecked']())) {
			modes['append']('dbash');
		}
		if ($p['bool']($m.pathCDash['isChecked']())) {
			modes['append']('cdash');
		}
		if ($p['bool']($m.pathCDashFarming['isChecked']())) {
			modes['append']('cdash-farming');
		}
		if ($p['bool']($m.pathExtended['isChecked']())) {
			modes['append']('extended');
		}
		if ($p['bool']($m.pathExtendedDamage['isChecked']())) {
			modes['append']('extended-damage');
		}
		if ($p['bool']($m.pathExtreme['isChecked']())) {
			modes['append']('extreme');
		}
		if ($p['bool']($m.pathTimedLevel['isChecked']())) {
			modes['append']('timed-level');
		}
		if ($p['bool']($m.pathGlitched['isChecked']())) {
			modes['append']('glitched');
		}
		starved = $m.starvedBox['isChecked']();
		prefer_path_difficulty = $m.diffSelection['getItemText']($m.diffSelection['getSelectedIndex']())['lower']();
		if ($p['bool']($p['op_eq'](prefer_path_difficulty, 'normal'))) {
			prefer_path_difficulty = null;
		}
		non_progressive_mapstones = $m.nonProgMapBox['isChecked']();
		ohko = $m.ohkoBox['isChecked']();
		zeroxp = $m.zeroBox['isChecked']();
		nobonus = $m.noBonusBox['isChecked']();
		force_trees = $m.forceBox['isChecked']();
		balanced = $p['op_eq']($m.algSelection['getSelectedIndex'](), 1);
		entrance = $m.entranceBox['isChecked']();
		$m['sharedMap'] = $p['dict']([]);
		$m['sharedList'] = $p['list']([]);
		if ($p['bool']($m.enableSync['isChecked']())) {
			if ($p['bool']($m.shareSkills['isChecked']())) {
				$m['sharedList']['append']('WallJump');
				$m['sharedList']['append']('ChargeFlame');
				$m['sharedList']['append']('Dash');
				$m['sharedList']['append']('Stomp');
				$m['sharedList']['append']('DoubleJump');
				$m['sharedList']['append']('Glide');
				$m['sharedList']['append']('Bash');
				$m['sharedList']['append']('Climb');
				$m['sharedList']['append']('Grenade');
				$m['sharedList']['append']('ChargeJump');
			}
			if ($p['bool']($m.shareKeys['isChecked']())) {
				if ($p['bool'](shards)) {
					$m['sharedList']['append']('WaterVeinShard');
					$m['sharedList']['append']('GumonSealShard');
					$m['sharedList']['append']('SunstoneShard');
				}
				else {
					$m['sharedList']['append']('GinsoKey');
					$m['sharedList']['append']('ForlornKey');
					$m['sharedList']['append']('HoruKey');
				}
			}
			if ($p['bool']($m.shareEvents['isChecked']())) {
				$m['sharedList']['append']('Water');
				$m['sharedList']['append']('Wind');
				$m['sharedList']['append']('Warmth');
			}
			if ($p['bool']($m.shareTeleporters['isChecked']())) {
				$m['sharedList']['append']('TPForlorn');
				$m['sharedList']['append']('TPGrotto');
				$m['sharedList']['append']('TPSorrow');
				$m['sharedList']['append']('TPGrove');
				$m['sharedList']['append']('TPSwamp');
				$m['sharedList']['append']('TPValley');
			}
			if ($p['bool']($m.shareUpgrades['isChecked']())) {
				$m['sharedList']['append']('RB6');
				$m['sharedList']['append']('RB8');
				$m['sharedList']['append']('RB9');
				$m['sharedList']['append']('RB10');
				$m['sharedList']['append']('RB11');
				$m['sharedList']['append']('RB12');
				$m['sharedList']['append']('RB13');
				$m['sharedList']['append']('RB15');
			}
		}
		flags = '';
		syncFlags = '';
		flags = $p['__op_add']($add415=flags,$add416=mode);
		if ($p['bool'](limitkeys)) {
			flags = $p['__op_add']($add417=flags,$add418=',limitkeys');
		}
		if ($p['bool'](shards)) {
			flags = $p['__op_add']($add419=flags,$add420=',shards');
		}
		if ($p['bool'](clues)) {
			flags = $p['__op_add']($add421=flags,$add422=',clues');
		}
		if ($p['bool'](starved)) {
			flags = $p['__op_add']($add423=flags,$add424=',starved');
		}
		if ($p['bool'](prefer_path_difficulty)) {
			flags = $p['__op_add']($add427=flags,$add428=$p['__op_add']($add425=',prefer_path_difficulty=',$add426=prefer_path_difficulty));
		}
		if ($p['bool'](hard)) {
			flags = $p['__op_add']($add429=flags,$add430=',hard');
		}
		if ($p['bool'](ohko)) {
			flags = $p['__op_add']($add431=flags,$add432=',OHKO');
		}
		if ($p['bool'](zeroxp)) {
			flags = $p['__op_add']($add433=flags,$add434=',0XP');
		}
		if ($p['bool'](nobonus)) {
			flags = $p['__op_add']($add435=flags,$add436=',NoBonus');
		}
		if ($p['bool'](!$p['bool'](includePlants))) {
			flags = $p['__op_add']($add437=flags,$add438=',NoPlants');
		}
		if ($p['bool'](force_trees)) {
			flags = $p['__op_add']($add439=flags,$add440=',ForceTrees');
		}
		if ($p['bool'](non_progressive_mapstones)) {
			flags = $p['__op_add']($add441=flags,$add442=',NonProgressMapStones');
		}
		if ($p['bool'](no_teleporters)) {
			flags = $p['__op_add']($add443=flags,$add444=',NoTeleporters');
		}
		if ($p['bool'](balanced)) {
			flags = $p['__op_add']($add445=flags,$add446=',balanced');
		}
		if ($p['bool'](entrance)) {
			flags = $p['__op_add']($add447=flags,$add448=',entrance');
		}
		playerCountIn = 1;
		if ($p['bool']($m.enableSync['isChecked']())) {
			playerCountIn = $p['__op_add']($add449=$m.playerCountSelection['getSelectedIndex'](),$add450=1);
			sharedSeedFlags = $p['list']([]);
			if ($p['bool']($m.shareSkills['isChecked']())) {
				sharedSeedFlags['append']('skills');
			}
			if ($p['bool']($m.shareKeys['isChecked']())) {
				sharedSeedFlags['append']('keys');
			}
			if ($p['bool']($m.shareEvents['isChecked']())) {
				sharedSeedFlags['append']('events');
			}
			if ($p['bool']($m.shareTeleporters['isChecked']())) {
				sharedSeedFlags['append']('teleporters');
			}
			if ($p['bool']($m.shareUpgrades['isChecked']())) {
				sharedSeedFlags['append']('upgrades');
			}
			syncFlags = $p['__op_add']($add453=syncFlags,$add454=$p['__op_add']($add451=',shared=',$add452='+'['join'](sharedSeedFlags)));
			syncFlags = $p['__op_add']($add457=syncFlags,$add458=$p['__op_add']($add455=',mode=',$add456=$m.shareModeSelection['getItemText']($m.shareModeSelection['getSelectedIndex']())));
			sync_id = $m.syncIDSelection['getText']();
			if ($p['bool'](!$p['bool'](sync_id))) {
				sync_id = $p['float_int']((typeof ($mod7=(typeof ($mul57=$m['time']['time']())==typeof ($mul58=1000) && typeof $mul57=='number'?
					$mul57*$mul58:
					$p['op_mul']($mul57,$mul58)))==typeof ($mod8=1073741824) && typeof $mod7=='number'?
					(($mod7=$mod7%$mod8)<0&&$mod8>0?$mod7+$mod8:$mod7):
					$p['op_mod']($mod7,$mod8)));
			}
			syncFlags = $p['__op_add']($add461=syncFlags,$add462=$p['__op_add']($add459=',sync',$add460=$p['str'](sync_id)));
		}
		$m.random['seed'](seed);
		$m['placements'] = $m['placeItemsMulti'](seed, exp_pool, hard, includePlants, shards, limitkeys, clues, no_teleporters, modes, flags, syncFlags, starved, prefer_path_difficulty, non_progressive_mapstones, playerCountIn, balanced, entrance);
		$m.genButton['setText']($p['__op_add']($add465=$p['__op_add']($add463='Seed ',$add464=seed),$add466=' generated. New seed?'));
		$m['downloadPlayerID'] = 0;
		$m['downloadSpoilerID'] = 0;
		$m['spoilerButton']['setStyleName']('active_button');
		$m['seedButton']['setStyleName']('active_button');
		if ($p['bool'](($p['cmp']($p['len']($m['placements']), 1) == 1))) {
			$m['seedButton']['setText']('Download Seed (P1)');
			$m['spoilerButton']['setText']('Download Spoiler (P1)');
		}
		else {
			$m['seedButton']['setText']('Download Seed');
			$m['spoilerButton']['setText']('Download Spoiler');
		}
		return null;
	};
	$m['generate'].__name__ = 'generate';

	$m['generate'].__bind_type__ = 0;
	$m['generate'].__args__ = [null,null];
	$m['download_seed'] = function() {
		var dl,$add476,$add470,$add471,element,$add468,$add469,$add475,$add474,$add472,$mod9,$add467,$add473,$mod10;
		if ($p['bool']((typeof placements == "undefined"?$m.placements:placements))) {
			element = $m['DOM']['createElement']('a');
			element['setAttribute']('href', $p['__op_add']($add467='data:text/plain;charset=utf-8,',$add468=(typeof encodeURIComponent == "undefined"?$m.encodeURIComponent:encodeURIComponent)((typeof placements == "undefined"?$m.placements:placements).__getitem__($m['downloadPlayerID']).__getitem__(0))));
			element['setAttribute']('download', 'randomizer.dat');
			$p['getattr'](element, 'style').display = 'none';
			dl = $m['DOM']['getElementById']('dl');
			$m['DOM']['appendChild'](dl, element);
			element['click']();
			$m['DOM']['removeChild'](dl, element);
			$m['downloadPlayerID'] = $p['__op_add']($add469=$m['downloadPlayerID'],$add470=1);
			$m['downloadPlayerID'] = (typeof ($mod9=$m['downloadPlayerID'])==typeof ($mod10=$p['len']((typeof placements == "undefined"?$m.placements:placements))) && typeof $mod9=='number'?
				(($mod9=$mod9%$mod10)<0&&$mod10>0?$mod9+$mod10:$mod9):
				$p['op_mod']($mod9,$mod10));
			if ($p['bool'](($p['cmp']($p['len']((typeof placements == "undefined"?$m.placements:placements)), 1) == 1))) {
				$m['seedButton']['setText']($p['__op_add']($add475=$p['__op_add']($add473='Download Seed (P',$add474=$p['str']($p['__op_add']($add471=$m['downloadPlayerID'],$add472=1))),$add476=')'));
			}
		}
		return null;
	};
	$m['download_seed'].__name__ = 'download_seed';

	$m['download_seed'].__bind_type__ = 0;
	$m['download_seed'].__args__ = [null,null];
	$m['download_spoiler'] = function() {
		var dl,$mod11,$mod12,$add480,element,$add484,$add485,$add486,$add478,$add482,$add483,$add479,$add477,$add481;
		if ($p['bool']((typeof placements == "undefined"?$m.placements:placements))) {
			element = $m['DOM']['createElement']('a');
			element['setAttribute']('href', $p['__op_add']($add477='data:text/plain;charset=utf-8,',$add478=(typeof encodeURIComponent == "undefined"?$m.encodeURIComponent:encodeURIComponent)((typeof placements == "undefined"?$m.placements:placements).__getitem__($m['downloadSpoilerID']).__getitem__(1))));
			element['setAttribute']('download', 'spoiler.txt');
			$p['getattr'](element, 'style').display = 'none';
			dl = $m['DOM']['getElementById']('dl');
			$m['DOM']['appendChild'](dl, element);
			element['click']();
			$m['DOM']['removeChild'](dl, element);
			$m['downloadSpoilerID'] = $p['__op_add']($add479=$m['downloadSpoilerID'],$add480=1);
			$m['downloadSpoilerID'] = (typeof ($mod11=$m['downloadSpoilerID'])==typeof ($mod12=$p['len']((typeof placements == "undefined"?$m.placements:placements))) && typeof $mod11=='number'?
				(($mod11=$mod11%$mod12)<0&&$mod12>0?$mod11+$mod12:$mod11):
				$p['op_mod']($mod11,$mod12));
			if ($p['bool'](($p['cmp']($p['len']((typeof placements == "undefined"?$m.placements:placements)), 1) == 1))) {
				$m['spoilerButton']['setText']($p['__op_add']($add485=$p['__op_add']($add483='Download Spoiler (P',$add484=$p['str']($p['__op_add']($add481=$m['downloadSpoilerID'],$add482=1))),$add486=')'));
			}
		}
		return null;
	};
	$m['download_spoiler'].__name__ = 'download_spoiler';

	$m['download_spoiler'].__bind_type__ = 0;
	$m['download_spoiler'].__args__ = [null,null];
	$m['main'] = function() {
		var modeText,logicText,title,seedInputPanel,row0,buttonPanel,logicListener,syncVariables,syncIDText,syncIDPanel,syncPanel,variationPanel,customPathListener,downloadPanel,diffText,syncShare,panel,algInputPanel,$iter47_iter,$iter47_type,seedText,$iter47_array,playerCountText,count,row1,row2,row3,row4,row5,$iter47_idx,shareModePanel,playerCountPanel,variations1,variations3,variations2,shareModeText,seedPanel,row1_2,row1_3,row1_1,paths2,paths3,paths1,paths4,pathsPanel,variationText,algText,$iter47_nextval;
		$m['pyjd']['setup']('public/web_seed_generator.html');
		$m['itemList'] = $p['list'](['EX1', 'EX*', 'KS', 'MS', 'AC', 'EC', 'HC', 'WallJump', 'ChargeFlame', 'Dash', 'Stomp', 'DoubleJump', 'Glide', 'Bash', 'Climb', 'Grenade', 'ChargeJump', 'GinsoKey', 'ForlornKey', 'HoruKey', 'Water', 'Wind', 'Warmth', 'RB0', 'RB1', 'RB6', 'RB8', 'RB9', 'RB10', 'RB11', 'RB12', 'RB13', 'RB15', 'WaterVeinShard', 'GumonSealShard', 'SunstoneShard', 'TPForlorn', 'TPGrotto', 'TPSorrow', 'TPGrove', 'TPSwamp', 'TPValley']);
		$m['random'] = $m['Random']();
		panel = $pyjs_kwargs_call(null, $m['VerticalPanel'], null, null, [{HorizontalAlignment:$p['getattr']($m['HasAlignment'], 'ALIGN_CENTER'), StyleName:'main'}]);
		row0 = $pyjs_kwargs_call(null, $m['HorizontalPanel'], null, null, [{HorizontalAlignment:$p['getattr']($m['HasAlignment'], 'ALIGN_LEFT')}]);
		row1 = $pyjs_kwargs_call(null, $m['HorizontalPanel'], null, null, [{HorizontalAlignment:$p['getattr']($m['HasAlignment'], 'ALIGN_LEFT'), StyleName:'row'}]);
		row2 = $pyjs_kwargs_call(null, $m['VerticalPanel'], null, null, [{HorizontalAlignment:$p['getattr']($m['HasAlignment'], 'ALIGN_LEFT'), StyleName:'row'}]);
		row3 = $pyjs_kwargs_call(null, $m['DisclosurePanel'], null, null, [{StyleName:'row'}, 'Logic Paths']);
		row4 = $pyjs_kwargs_call(null, $m['DisclosurePanel'], null, null, [{StyleName:'row'}, 'Sync Options']);
		row5 = $pyjs_kwargs_call(null, $m['HorizontalPanel'], null, null, [{HorizontalAlignment:$p['getattr']($m['HasAlignment'], 'ALIGN_LEFT'), StyleName:'row'}]);
		panel['add'](row0);
		panel['add'](row1);
		panel['add'](row2);
		panel['add'](row3);
		panel['add'](row4);
		panel['add'](row5);
		title = $pyjs_kwargs_call(null, $m['HTML'], null, null, [{StyleName:'title'}, 'Ori DE Randomizer (v2.4.3)']);
		row0['add'](title);
		row1_1 = $pyjs_kwargs_call(null, $m['HorizontalPanel'], null, null, [{StyleName:'inner_row'}]);
		row1_2 = $pyjs_kwargs_call(null, $m['HorizontalPanel'], null, null, [{StyleName:'inner_row'}]);
		row1_3 = $pyjs_kwargs_call(null, $m['HorizontalPanel'], null, null, [{StyleName:'inner_row'}]);
		row1['add'](row1_1);
		row1['add'](row1_2);
		row1['add'](row1_3);
		logicText = $pyjs_kwargs_call(null, $m['HTML'], null, null, [{StyleName:'label'}, 'Logic']);
		$m['logicSelection'] = $pyjs_kwargs_call(null, $m['ListBox'], null, null, [{VisibleItemCount:1, StyleName:'dropdown'}]);
		$m['logicSelection']['addItem']('Casual');
		$m['logicSelection']['addItem']('Standard');
		$m['logicSelection']['addItem']('Expert');
		$m['logicSelection']['addItem']('Master');
		$m['logicSelection']['addItem']('Hard');
		$m['logicSelection']['addItem']('OHKO');
		$m['logicSelection']['addItem']('0 XP');
		$m['logicSelection']['addItem']('Glitched');
		$m['logicSelection']['addItem']('Custom');
		$m['logicSelection']['setSelectedIndex'](1);
		logicListener = $m['LogicListener']($m['logicSelection']);
		row1_1['add'](logicText);
		row1_1['add']($m['logicSelection']);
		modeText = $pyjs_kwargs_call(null, $m['HTML'], null, null, [{StyleName:'label'}, 'Mode']);
		$m['modeSelection'] = $pyjs_kwargs_call(null, $m['ListBox'], null, null, [{VisibleItemCount:1, StyleName:'dropdown'}]);
		$m['modeSelection']['addItem']('Default');
		$m['modeSelection']['addItem']('Shards');
		$m['modeSelection']['addItem']('Limitkeys');
		$m['modeSelection']['addItem']('Clues');
		$m['modeSelection']['setSelectedIndex'](1);
		row1_2['add'](modeText);
		row1_2['add']($m['modeSelection']);
		diffText = $pyjs_kwargs_call(null, $m['HTML'], null, null, [{StyleName:'label'}, 'Path Difficulty']);
		$m['diffSelection'] = $pyjs_kwargs_call(null, $m['ListBox'], null, null, [{VisibleItemCount:1, StyleName:'dropdown'}]);
		$m['diffSelection']['addItem']('Easy');
		$m['diffSelection']['addItem']('Normal');
		$m['diffSelection']['addItem']('Hard');
		$m['diffSelection']['setSelectedIndex'](1);
		row1_3['add'](diffText);
		row1_3['add']($m['diffSelection']);
		variationText = $pyjs_kwargs_call(null, $m['HTML'], null, null, [{StyleName:'section'}, 'Variations']);
		variationPanel = $m['HorizontalPanel']();
		row2['add'](variationText);
		row2['add'](variationPanel);
		variations1 = $pyjs_kwargs_call(null, $m['VerticalPanel'], null, null, [{StyleName:'var_column'}]);
		variations2 = $pyjs_kwargs_call(null, $m['VerticalPanel'], null, null, [{StyleName:'var_column'}]);
		variations3 = $pyjs_kwargs_call(null, $m['VerticalPanel'], null, null, [{StyleName:'var_column'}]);
		variationPanel['add'](variations1);
		variationPanel['add'](variations2);
		variationPanel['add'](variations3);
		$m['forceBox'] = $m['CheckBox']('Force Trees');
		$m['hardBox'] = $m['CheckBox']('Hard Mode');
		$m['noTeleBox'] = $m['CheckBox']('No Teleporters');
		$m['entranceBox'] = $m['CheckBox']('Entrance Shuffle');
		$m['forceBox']['setChecked'](true);
		variations1['add']($m['forceBox']);
		variations1['add']($m['hardBox']);
		variations1['add']($m['noTeleBox']);
		variations1['add']($m['entranceBox']);
		$m['starvedBox'] = $m['CheckBox']('Starved');
		$m['ohkoBox'] = $m['CheckBox']('OHKO');
		$m['noPlantsBox'] = $m['CheckBox']('No Plants');
		variations2['add']($m['starvedBox']);
		variations2['add']($m['ohkoBox']);
		variations2['add']($m['noPlantsBox']);
		$m['nonProgMapBox'] = $m['CheckBox']('Discrete Mapstones');
		$m['zeroBox'] = $m['CheckBox']('0 XP');
		$m['noBonusBox'] = $m['CheckBox']('No Bonuses');
		variations3['add']($m['nonProgMapBox']);
		variations3['add']($m['zeroBox']);
		variations3['add']($m['noBonusBox']);
		pathsPanel = $m['HorizontalPanel']();
		row3['add'](pathsPanel);
		paths1 = $pyjs_kwargs_call(null, $m['VerticalPanel'], null, null, [{StyleName:'logic_column'}]);
		paths2 = $pyjs_kwargs_call(null, $m['VerticalPanel'], null, null, [{StyleName:'logic_column'}]);
		paths3 = $pyjs_kwargs_call(null, $m['VerticalPanel'], null, null, [{StyleName:'logic_column'}]);
		paths4 = $pyjs_kwargs_call(null, $m['VerticalPanel'], null, null, [{StyleName:'logic_column'}]);
		pathsPanel['add'](paths1);
		pathsPanel['add'](paths2);
		pathsPanel['add'](paths3);
		pathsPanel['add'](paths4);
		customPathListener = $m['CustomPathListener']();
		$m['pathNormal'] = $m['CheckBox']('Normal');
		$m['pathNormal']['setChecked'](true);
		$m['pathNormal']['addClickListener'](customPathListener);
		paths1['add']($m['pathNormal']);
		$m['pathLure'] = $m['CheckBox']('Lure');
		$m['pathLure']['setChecked'](true);
		$m['pathLure']['addClickListener'](customPathListener);
		paths1['add']($m['pathLure']);
		$m['pathExtended'] = $m['CheckBox']('Extended');
		$m['pathExtended']['addClickListener'](customPathListener);
		paths1['add']($m['pathExtended']);
		$m['pathExtreme'] = $m['CheckBox']('Extreme');
		$m['pathExtreme']['addClickListener'](customPathListener);
		paths1['add']($m['pathExtreme']);
		$m['pathSpeed'] = $m['CheckBox']('Speed');
		$m['pathSpeed']['setChecked'](true);
		$m['pathSpeed']['addClickListener'](customPathListener);
		paths2['add']($m['pathSpeed']);
		$m['pathSpeedLure'] = $m['CheckBox']('Speed-Lure');
		$m['pathSpeedLure']['addClickListener'](customPathListener);
		paths2['add']($m['pathSpeedLure']);
		$m['pathExtendedDamage'] = $m['CheckBox']('Extended-Damage');
		$m['pathExtendedDamage']['addClickListener'](customPathListener);
		paths2['add']($m['pathExtendedDamage']);
		$m['pathTimedLevel'] = $m['CheckBox']('Timed-Level');
		$m['pathTimedLevel']['addClickListener'](customPathListener);
		paths2['add']($m['pathTimedLevel']);
		$m['pathDBoostLight'] = $m['CheckBox']('DBoost-Light');
		$m['pathDBoostLight']['setChecked'](true);
		$m['pathDBoostLight']['addClickListener'](customPathListener);
		paths3['add']($m['pathDBoostLight']);
		$m['pathLureHard'] = $m['CheckBox']('Lure-Hard');
		$m['pathLureHard']['addClickListener'](customPathListener);
		paths3['add']($m['pathLureHard']);
		$m['pathDBash'] = $m['CheckBox']('DBash');
		$m['pathDBash']['addClickListener'](customPathListener);
		paths3['add']($m['pathDBash']);
		$m['pathGlitched'] = $m['CheckBox']('Glitched');
		$m['pathGlitched']['addClickListener'](customPathListener);
		paths3['add']($m['pathGlitched']);
		$m['pathDBoost'] = $m['CheckBox']('DBoost');
		$m['pathDBoost']['addClickListener'](customPathListener);
		paths4['add']($m['pathDBoost']);
		$m['pathDBoostHard'] = $m['CheckBox']('DBoost-Hard');
		$m['pathDBoostHard']['addClickListener'](customPathListener);
		paths4['add']($m['pathDBoostHard']);
		$m['pathCDash'] = $m['CheckBox']('CDash');
		$m['pathCDash']['addClickListener'](customPathListener);
		paths4['add']($m['pathCDash']);
		$m['pathCDashFarming'] = $m['CheckBox']('CDash-Farming');
		$m['pathCDashFarming']['addClickListener'](customPathListener);
		paths4['add']($m['pathCDashFarming']);
		syncPanel = $m['VerticalPanel']();
		syncShare = $pyjs_kwargs_call(null, $m['HorizontalPanel'], null, null, [{StyleName:'row'}]);
		syncVariables = $pyjs_kwargs_call(null, $m['HorizontalPanel'], null, null, [{StyleName:'row'}]);
		syncPanel['add'](syncShare);
		syncPanel['add'](syncVariables);
		$m['enableSync'] = $m['CheckBox']('Enable Sync');
		syncShare['add']($m['enableSync']);
		$m['shareSkills'] = $m['CheckBox']('Skills');
		$m['shareSkills']['setChecked'](true);
		syncShare['add']($m['shareSkills']);
		$m['shareKeys'] = $m['CheckBox']('Keys');
		$m['shareKeys']['setChecked'](true);
		syncShare['add']($m['shareKeys']);
		$m['shareEvents'] = $m['CheckBox']('Events');
		syncShare['add']($m['shareEvents']);
		$m['shareUpgrades'] = $m['CheckBox']('Upgrades');
		syncShare['add']($m['shareUpgrades']);
		$m['shareTeleporters'] = $m['CheckBox']('Teleporters');
		syncShare['add']($m['shareTeleporters']);
		playerCountPanel = $pyjs_kwargs_call(null, $m['HorizontalPanel'], null, null, [{StyleName:'inner_row'}]);
		playerCountText = $pyjs_kwargs_call(null, $m['HTML'], null, null, [{StyleName:'label'}, 'Player Count']);
		playerCountPanel['add'](playerCountText);
		$m['playerCountSelection'] = $pyjs_kwargs_call(null, $m['ListBox'], null, null, [{VisibleItemCount:1, StyleName:'dropdown_small'}]);
		$iter47_iter = $p['range'](1, 9);
		$iter47_nextval=$p['__iter_prepare']($iter47_iter,false);
		while (typeof($p['__wrapped_next']($iter47_nextval).$nextval) != 'undefined') {
			count = $iter47_nextval.$nextval;
			$m['playerCountSelection']['addItem']($p['str'](count));
		}
		$m['playerCountSelection']['setSelectedIndex'](1);
		playerCountPanel['add']($m['playerCountSelection']);
		syncVariables['add'](playerCountPanel);
		shareModePanel = $pyjs_kwargs_call(null, $m['HorizontalPanel'], null, null, [{StyleName:'inner_row'}]);
		shareModeText = $pyjs_kwargs_call(null, $m['HTML'], null, null, [{StyleName:'label'}, 'Share Mode']);
		shareModePanel['add'](shareModeText);
		$m['shareModeSelection'] = $pyjs_kwargs_call(null, $m['ListBox'], null, null, [{VisibleItemCount:1, StyleName:'dropdown'}]);
		$m['shareModeSelection']['addItem']('Shared');
		$m['shareModeSelection']['addItem']('Swap');
		$m['shareModeSelection']['addItem']('Split');
		$m['shareModeSelection']['addItem']('None');
		shareModePanel['add']($m['shareModeSelection']);
		syncVariables['add'](shareModePanel);
		syncIDPanel = $pyjs_kwargs_call(null, $m['HorizontalPanel'], null, null, [{StyleName:'inner_row'}]);
		syncIDText = $pyjs_kwargs_call(null, $m['HTML'], null, null, [{StyleName:'label'}, 'Sync ID']);
		syncIDPanel['add'](syncIDText);
		$m['syncIDSelection'] = $pyjs_kwargs_call(null, $m['TextBox'], null, null, [{StyleName:'seed', MaxLength:10}]);
		syncIDPanel['add']($m['syncIDSelection']);
		syncVariables['add'](syncIDPanel);
		row4['add'](syncPanel);
		seedPanel = $m['VerticalPanel']();
		seedInputPanel = $pyjs_kwargs_call(null, $m['HorizontalPanel'], null, null, [{StyleName:'inner_row'}]);
		seedText = $pyjs_kwargs_call(null, $m['HTML'], null, null, [{StyleName:'label'}, 'Seed']);
		$m['seedSelection'] = $pyjs_kwargs_call(null, $m['TextBox'], null, null, [{StyleName:'seed', MaxLength:10}]);
		seedInputPanel['add'](seedText);
		seedInputPanel['add']($m['seedSelection']);
		algInputPanel = $pyjs_kwargs_call(null, $m['HorizontalPanel'], null, null, [{StyleName:'inner_row'}]);
		algText = $pyjs_kwargs_call(null, $m['HTML'], null, null, [{StyleName:'label'}, 'Fill Algorithm']);
		$m['algSelection'] = $pyjs_kwargs_call(null, $m['ListBox'], null, null, [{VisibleItemCount:1, StyleName:'dropdown'}]);
		$m['algSelection']['addItem']('Classic');
		$m['algSelection']['addItem']('Balanced');
		algInputPanel['add'](algText);
		algInputPanel['add']($m['algSelection']);
		seedPanel['add'](seedInputPanel);
		seedPanel['add'](algInputPanel);
		buttonPanel = $m['VerticalPanel']();
		$m['placements'] = $p['list']([]);
		$m['genButton'] = $pyjs_kwargs_call(null, $m['Button'], null, null, [{StyleName:'gen_button'}, 'Generate', $m['generate']]);
		buttonPanel['add']($m['genButton']);
		downloadPanel = $m['HorizontalPanel']();
		$m['spoilerButton'] = $pyjs_kwargs_call(null, $m['Button'], null, null, [{StyleName:'inactive_button'}, 'Download Spoiler', $m['download_spoiler']]);
		$m['seedButton'] = $pyjs_kwargs_call(null, $m['Button'], null, null, [{StyleName:'inactive_button'}, 'Download Seed', $m['download_seed']]);
		downloadPanel['add']($m['spoilerButton']);
		downloadPanel['add']($m['seedButton']);
		buttonPanel['add'](downloadPanel);
		row5['add'](seedPanel);
		row5['add'](buttonPanel);
		$m['RootPanel']()['add'](panel);
		$m['pyjd']['run']();
		return null;
	};
	$m['main'].__name__ = 'main';

	$m['main'].__bind_type__ = 0;
	$m['main'].__args__ = [null,null];
	if ($p['bool']($p['op_eq']((typeof __name__ == "undefined"?$m.__name__:__name__), '__main__'))) {
		$m['main']();
	}
	return this;
}; /* end web_seed_generator */


/* end module: web_seed_generator */


/*
PYJS_DEPS: ['re', 'math', 'time', 'pyjd', 'pyjamas.ui.RootPanel.RootPanel', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.RootPanel', 'pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui.VerticalPanel', 'pyjamas.ui.HorizontalPanel.HorizontalPanel', 'pyjamas.ui.HorizontalPanel', 'pyjamas.ui.DisclosurePanel.DisclosurePanel', 'pyjamas.ui.DisclosurePanel', 'pyjamas.ui.HasAlignment', 'pyjamas.ui.Button.Button', 'pyjamas.ui.Button', 'pyjamas.ui.RadioButton.RadioButton', 'pyjamas.ui.RadioButton', 'pyjamas.ui.CheckBox.CheckBox', 'pyjamas.ui.CheckBox', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML', 'pyjamas.ui.ListBox.ListBox', 'pyjamas.ui.ListBox', 'pyjamas.ui.TextBox.TextBox', 'pyjamas.ui.TextBox', 'pyjamas.DOM']
*/
