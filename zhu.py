#requests爬优书网小说评分

#命名有错误需要去掉& nbsp; 

#-*- coding=utf-8 -*-
import requests
from lxml import etree
import difflib  #添加了函数
import random
from multiprocessing import Process
import gevent
from gevent import monkey
import sys
import argparse
import io
import pandas as pd
from selenium import webdriver
import csv
import time
import shutil
import os
from bs4 import BeautifulSoup
import urllib.request
import re
# =============================================================================
# sys.stdout = io.TextIOWrapper(sys.stdout.buffer,encoding='utf8')
# =============================================================================


monkey.patch_all()



def process_start(i_list):
    tasks = []
    for i in i_list:
        tasks.append(gevent.spawn(main,i))
        #listd(i)
    gevent.joinall(tasks)#使用协程来执行
 
def task_start(lists):#每10W条url启动一个进程
    i_list = []
    process_list = []
    for idx, x in enumerate(lists):
        i_list.append(x)
        if (idx)%4 == 3 or idx == len(lists)-1:
            p = Process(target=process_start,args=(i_list,))
            p.start()
            i_list = []
            process_list.append(p)

    for p in process_list:
        p.join()
            
            #process_start(i_list)
        

def setup(i,start,end):

    f = open('《诸天尽头》_凤嘲凰著_科幻_起点中文网.html', encoding='utf-8')
    html = f.read() 
    html_xpath = etree.HTML(html)
    qlink = html_xpath.xpath('//a[contains(@href,"chapter")]/@href')[2:-1]
    qname = html_xpath.xpath('//a[contains(@href,"chapter")]/text()')[1:-1]
    
    html2=requests.get(i[1])
    html2.encoding = html2.apparent_encoding
    html2=html2.text
    html_xpath2 = etree.HTML(html2)
    link = html_xpath2.xpath('//*[@id="list"]/dl/dd/a/@href')
    name = html_xpath2.xpath('//*[@id="list"]/dl/dd/a/text()')
    # link = html_xpath.xpath('//*[@class="_chapter"]/li/a/@href')
    # name = html_xpath.xpath('//*[@class="_chapter"]/li/a/text()')
    lists = []
    lt = []
    lts = []
    flag = 0
    ids = []
    for i,x in enumerate(name):
        idx = difflib.get_close_matches_indexes(x,qname,1,0.4)
        if idx:
            i = 'https://www.biqubu.com'+link[i]
            lt.append(i)
            lts.append(x)
            ids.append(flag)
            i = 'https:'+qlink[idx[0]]
            lt.append(i)
            lt.append(flag)
            lists.append(lt)
            lt = []
            flag+=1
    
    print('start')
            
    # lll = lists[start:end+1]
    # # lists[370][1] = 'https:'+qlink[366]
    # # lists[386][1] = 'https:'+qlink[382]
    # # lll.append(lists[370])
    
    # lll = lists[start:end+1]
    # lll.append(lists[304])
    # task_start(lll)
    task_start(lists[start:end+1])
    
    
    with open('诸天尽头.html', "a+",encoding='utf-8') as f:
        for i in range(start,end+1):
            f.write('<p><a href="诸天尽头/'+str(ids[i])+'.html" id="'+str(ids[i])+'">'+lts[i]+'</a></p>\n')
        #f.write('</body></html>')
    print(lts[start:end+1])    
    print(len(lts)) 
        
    
    for j in range(1,2):
        task_start(lists[start+j*15:end+1+j*15])    
        with open('诸天尽头.html', "a+",encoding='utf-8') as f:
            for i in range(start+j*15,end+1+j*15):
                f.write('<p><a href="诸天尽头/'+str(ids[i])+'.html" id="'+str(ids[i])+'">'+lts[i]+'</a></p>\n')
        #f.write('</body></html>')
        print(lts[start+j*15:end+1+j*15])    
        print(len(lts))
        

    
    
def main(i):
    if i[0] == 0:
        os._exit(0)
    bookId=i[1].split('/')[-2]
    chapterId=i[1].split('/')[-1]
    tid = i[2]
    
 
    time.sleep(5+random.randint(10,30))
    chap = requests.get('https://vipreader.qidian.com/ajax/chapterReview/reviewSummary?_csrfToken=jYiwmLcaMChAB3NSM1JQFI0oY5EvwJNW36O4TU4w&bookId='+bookId+'&chapterId='+chapterId).json()
    
    html2=requests.get(i[0])
    #html2.encoding = html2.apparent_encoding
    html2=html2.text
    html_xpath2 = etree.HTML(html2)
    cn = html_xpath2.xpath('//*[@class="bookname"]/h1/text()')
    ct = html_xpath2.xpath('//*[@id="content"]/text()')
    segid = {}
    # segid = []
    # segids = []
    shutil.copy("comments.html",'诸天尽头/'+str(tid)+'说.html')
    for i in range(chap["data"]["total"]):
        flag = 1
        num = chap["data"]["list"][i]["reviewNum"]//20+1
        with open('诸天尽头/'+str(tid)+'说.html', "a+",encoding='utf-8') as f:
            f.write('<a name="'+str(chap["data"]["list"][i]["segmentId"])+'">')
            segid[chap["data"]["list"][i]["segmentId"]]=chap["data"]["list"][i]["reviewNum"]
            # segid.append(chap["data"]["list"][i]["segmentId"])
            # segid.append(chap["data"]["list"][i]["reviewNum"])
            # segids.append(segid)
            # segid = []
            session = requests.session()
            session.mount('http://', HTTPAdapter(max_retries=20))
            session.mount('https://', HTTPAdapter(max_retries=20))
            for j in range(num):
                time.sleep(random.randint(2,9)+random.randint(2,9)+10*random.randint(0,5))
                cont = session.get('https://read.qidian.com/ajax/chapterReview/reviewList?_csrfToken=jYiwmLcaMChAB3NSM1JQFI0oY5EvwJNW36O4TU4w^&bookId='+bookId+'&chapterId='+chapterId+'^&segmentId='+str(chap["data"]["list"][i]["segmentId"])+'^&type=2^&page='+str(j+1)+'^&pageSize=20').json()#, headers=headers
                for ii in cont["data"]["list"]:
                    if flag:
                        f.write(cont["data"]["list"][0]["quoteContent"]+'</a>\n')
                        flag = 0
                    f.write('<p>&nbsp;&nbsp;&nbsp;&nbsp;'+ii["content"]+'</p>\n')
                    
            session.close()
    with open('诸天尽头/'+str(tid)+'说.html', "a+",encoding='utf-8') as f:
        f.write('</body></html>') 

    shutil.copy("comments.html",'诸天尽头/'+str(tid)+'.html')
    with open('诸天尽头/'+str(tid)+'.html', "a+",encoding='utf-8') as f:
        if segid.get(-1):
            f.write('<h1>'+cn[0]+'<a href="'+str(tid)+'说.html#'+str(-1)+'">'+str(segid.get(-1))+'</a></h1>\n')
        else:
            f.write('<h1>'+cn[0]+'</h1>\n')
        for i in range(len(ct)):
            if segid.get(i+1):
                f.write('<p>'+ct[i]+'<a href="'+str(tid)+'说.html#'+str(i+1)+'">'+str(segid.get(i+1))+'</a></p>\n')
            else:
                f.write('<p>'+ct[i]+'</p>\n')
        f.write('<div style="text-align:center"><a href="'+str(tid-1)+'.html">上一章</a><a href="../诸天尽头.html#'+str(tid)+'">章节目录</a><a href="'+str(tid+1)+'.html">下一章</a>\n')	
        f.write('</body></html>')           
    
    
if __name__ == '__main__':
    #task_start()
    
    parser = argparse.ArgumentParser(description='Download novel.')
    parser.add_argument('-s','--start',type = int, default='100',help = 'the start of chapter')
    parser.add_argument('-e','--end',type = int,default='120', help = 'the end of chapter')
    args = parser.parse_args()
    url = ['https://book.qidian.com/info/1016314237#Catalog','https://www.biqubu.com/book_16028/']
    setup(url,args.start,args.end)
    #    start = 101,end = 120
    # cd C:\Users\22129\mytool\git\novel
    #python zhu.py -s 406 -e 420
    