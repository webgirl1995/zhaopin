import React,{ Component }from 'react';
import Card from 'src/components/Card';
import './index.less';

const dataList=[
  {name:'云智能基础产品事业部-安全-商业化产品经理-杭州afjkjjfksajfakslfjkasdfjkadjfjkf',city:'杭州',time:'3分钟前',
    url:'https://job.alibaba.com/zhaopin/index.htm'},
  {name:'平头哥-IoT芯片-技术市场专家',city:'上海',time:'3分钟前',url:'https://job.alibaba.com/zhaopin/index.htm'},
  {name:'盒马-金牌店长招募令-北京',city:'北京',time:'3分钟前',url:'https://job.alibaba.com/zhaopin/index.htm'},
  {name:'搜索事业部-高级前端开发工程师-杭州',city:'杭州',time:'14分钟前',url:'https://job.alibaba.com/zhaopin/index.htm'},
  {name:'平头哥-IoT芯片-SoC验证专家 -上海',city:'上海',time:'25分钟前',url:'https://job.alibaba.com/zhaopin/index.htm'},
  {
    name:'数据计算-计算技术-Neuromorphic Architecture Research Scientist',
    city:'上海',
    time:'1小时前',
    url:'https://job.alibaba.com/zhaopin/index.htm'
  },
  {name:'阿里集团-CTO线-安全生产产品专家-杭州',cityarea:'杭州',time:'1小时前',url:'https://job.alibaba.com/zhaopin/index.htm'},
  {
    name:'平头哥-Staff Engineer, DFT-Sunnyvale, US',
    cityarea:'北京',
    time:'2小时前',
    url:'https://job.alibaba.com/zhaopin/index.htm'
  },
  {name:'阿里妈妈事业部-品牌广告产品专家-北京',cityarea:'北京',time:'2小时前',url:'https://job.alibaba.com/zhaopin/index.htm'},
  {name:'平头哥-IoT芯片-SoC验证专家',cityarea:'北京',time:'2小时前',url:'https://job.alibaba.com/zhaopin/index.htm'},
  {name:'搜索事业部-高级前端开发工程师-杭州',city:'杭州',time:'4小时前',url:'https://job.alibaba.com/zhaopin/index.htm'},
  {name:'云智能基础产品事业部-安全-商业化产品经理-杭州',cityarea:'杭州',time:'3分钟前',url:'https://job.alibaba.com/zhaopin/index.htm'},
  {name:'平头哥-IoT芯片-技术市场专家',city:'上海',time:'3分钟前',url:'https://job.alibaba.com/zhaopin/index.htm'},
  {name:'盒马-金牌店长招募令-北京',city:'北京',time:'3分钟前',url:'https://job.alibaba.com/zhaopin/index.htm'},
  {name:'搜索事业部-高级前端开发工程师-杭州',city:'杭州',time:'14分钟前',url:'https://job.alibaba.com/zhaopin/index.htm'},
  {name:'平头哥-IoT芯片-SoC验证专家 -上海',city:'上海',time:'25分钟前',url:'https://job.alibaba.com/zhaopin/index.htm'},
  {
    name:'数据计算-计算技术-Neuromorphic Architecture Research Scientist',
    area:'上海',
    time:'1小时前',
    url:'https://job.alibaba.com/zhaopin/index.htm'
  },
  {name:'阿里集团-CTO线-安全生产产品专家-杭州',city:'杭州',time:'1小时前',url:'https://job.alibaba.com/zhaopin/index.htm'},
  {name:'平头哥-Staff Engineer, DFT-Sunnyvale, US',city:'北京',time:'2小时前',url:'https://job.alibaba.com/zhaopin/index.htm'},
  {name:'阿里妈妈事业部-品牌广告产品专家-北京',city:'北京',time:'2小时前',url:'https://job.alibaba.com/zhaopin/index.htm'},
  {name:'平头哥-IoT芯片-SoC验证专家',city:'北京',time:'2小时前',url:'https://job.alibaba.com/zhaopin/index.htm'},
  {name:'搜索事业部-高级前端开发工程师-杭州',city:'杭州',time:'4小时前',url:'https://job.alibaba.com/zhaopin/index.htm'}
];

export default class Home extends Component{
  render(){
    return <div className='home-content'>
      <div className='home-head'>
        <img 
          src="https://img.alicdn.com/tfs/TB14TEEm7CWBuNjy0FaXXXUlXXa-1440-478.png"
          style={{ verticalAlign: 'middle', width: 1440, height: 478 }}
        />
        <div className='text'>
          <p className='en-text'>If not now, when?</p>
          <p className='en-text'>If not me, who?</p>
          <p className='zh-text'>此时此刻，非我莫属！</p>
          <div className='search'></div>
          <div className='searchText'>
            <input type='text' maxLength='30' placeholder='请输入职位关键词'></input>
            <button className='searchBtn'>搜索</button>
          </div>
          <div className='hot-text'>
            热门搜索：
            <a>JAVA</a>
            <a>IOS</a>
            <a>数据</a>
            <a>安全</a>
            <a>算法</a>
            <a>运营</a>
            <a>视觉</a>
            <a>交互</a>
            <a>前端</a>
          </div>
        </div>
      </div>
      <div className='home-midder'>
        <div className='new-position'>
          <Card 
            data={dataList}
            title="最新职位"
            extra={<a href='' className="more">更多</a>}
          />
        </div>
        <div className='show-pic'>
          <a>
            <img src='https://img.alicdn.com/tfs/TB1Z7JvoxGYBuNjy0FnXXX5lpXa-358-136.png'/>
          </a>
          <a>
            <img src='https://img.alicdn.com/tfs/TB18tFCCH2pK1RjSZFsXXaNlXXa-240-34.svg'/>
          </a>
        </div>
      </div>
      <div className='home-footer'>

      </div>
    </div>
    ;
  }
}