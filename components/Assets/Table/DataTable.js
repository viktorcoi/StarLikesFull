import { useEffect, useState } from "react";
import Pagination from "../Pagination/PaginationDefaults";
import Container from "../Container";
import DataTableColumn from "./DataTableColumn";
import styles from '../../Assets/Pagination/Pagination.module.css'
import CustomTable from "./CustomTable";
import Input from "../Inputs/Input";

const DataTable = (props) => {
    const [pagesLoaded, setPagesLoaded] = useState(false);
    /*
     * Paging logic
     */
    const [currentPage, setCurrentPage] = useState(1);
    const [pages, setPages] = useState(null);
    // is responsive for amount of lines displayed on each page 
    const [linesLimit, setLinesLimit] = useState(props.linesLimit ?? Pagination.LinesLimit);
    // is responsive for maximum amount of pages
    const [dataLimit, setDataLimit] = useState(3);
    // is responsive for showing getPaginatedGroup() amount of pages
    const [pageLimit, setPageLimit] = useState(Pagination.PagesLimit);
    const [isLastPage, setIsLastPage] = useState(false);
    const [isFirstPage, setIsFirstPage] = useState(false);
    const [pagesTimeout, setPagesTimeout] = useState(false);

    const updatePage = () => {
        getPaginatedData();
        setIsFirstPage(!isCurrentPageNotFirst());
        setIsLastPage(!isCurrentPageNotLast());
    }

    const isCurrentPageNotFirst = () => {
        return currentPage > 1;
    }

    const isCurrentPageNotLast = () => {
        return pages && dataLimit > 0 ? currentPage < dataLimit : false;
    }

    const logic_changePage = (num) => {
        /*         setPagesTimeout(true); */
        setCurrentPage(num);
        setTimeout(() => {

            /*             setPagesTimeout(false);
                        setPagesLoaded(true); */
        }, 0);
    };

    function goToNextPage() {

        if (pagesTimeout) {
            return;
        }
        if (isCurrentPageNotLast()) {
            logic_changePage((currentPage) => currentPage + 1);
        }

    }

    const goToPreviousPage = () => {

        if (pagesTimeout) {
            return;
        }

        if (isCurrentPageNotFirst()) {
            logic_changePage((currentPage) => currentPage - 1);
        }
    }

    const changePage = (event) => {
        if (pagesTimeout) {
            return;
        }
        const pageNumber = Number(event.target.textContent);
        if (pageNumber !== currentPage) {
            /* setPages(null); */
            logic_changePage(pageNumber);
        }
    }

    const isDataEmpty = (data) => !(data) || data.length < 1;

    const getPaginatedData = () => {


        /* fetchDomainLogs(parseInt(page), currentPage - 1); */
        /* setPagesLoaded(false); */
        const offset = (currentPage - 1) * linesLimit;
        /* let data = await props.dataFetch(currentPage, linesLimit); */
        let data = null;
        if (isDataEmpty(props.data) === false) {
            data = props.data.slice(offset, offset + linesLimit);
        }


        setPages(data);

        /*         setPagesLoaded(true); */

        if (isDataEmpty(data)) {
            setDataLimit(1);
            setCurrentPage(1);
        } else {
            let t = props.data.length % linesLimit;
            setDataLimit(Math.floor(props.data.length / linesLimit) + (t > 0 ? 1 : 0));
            setCurrentPage(currentPage);
        }
        // not yet implemented
    };

    const getPaginationGroup = () => {
        if (dataLimit < 1)
            return [];

        let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;

        let length = dataLimit - start;
        let pages_amount = pageLimit > length ? length : pageLimit;

        let t = new Array(pages_amount).fill().map((_, idx) => start + idx + 1);
        return t;
    };

    useEffect(() => {

        if (!pagesLoaded) {
            setPages(props.data);
            setPagesLoaded(true);
            return;
        }
        /*      setPagesTimeout(true); */
        updatePage();
        /*         setTimeout(() => setPagesTimeout(false), 0); */
    }, [props.data, currentPage, pagesLoaded, dataLimit]);

    const renderData = () => {
        if (!(pages) || pages.length < 1) {
            return (
                <DataTableColumn>
                    <td style={{textAlign: "center"}}>{props.emptyText || "Нет данных"}</td>
                </DataTableColumn>
            );
        }
        if (!(props.render)) {
            return;
        }
        return pages.filter((props.filter) ?? (v => v)).map((v, i) => props.render(v, i, props.columns));
        
    };

    const renderPlaceholder = () => {
        let placeholder = [];

        for (let index = 0; index < linesLimit; index++) {
            placeholder.push((
                <DataTableColumn>
                    {
                        props.columns.map((v, i) =>
                            <td key={i}><span className="td-placeholder loading-anim">......................</span></td>)
                    }
                </DataTableColumn>
            ));
        }

        return placeholder;
    }

    const PageNumber = (props) => {
        const { number } = props;
        return (
            <div {...props} className={`${styles["number-page"]} none-select d-flex cursor-pointer transition_0_3 ${currentPage == number ? styles.select : ""}`}>
                <p onClick={(v) => changePage(v)} className='margin-auto'>{number}</p>
            </div>
        )
    };

    const FastForward = (props) => {
        const [inputState, setInputState] = useState(false);
        const [buttonState, setButtonState] = useState("");
        const [input, setInput] = useState("");
        const pagGroup = getPaginationGroup();

        if (pagGroup.length < 1) {
            return <></>;
        }

        if (pagGroup[pagGroup.length - 1] >= dataLimit) {
            return <></>;
        }

        const applyFastForward = () => {
            if (buttonState != "") {
                return;
            }

            const resetButton = () => setTimeout(() => setButtonState(""), 200);

            const num = parseInt(input);

            if (num < 1 || num > dataLimit) {
                setButtonState("error");
                resetButton();
                return;
            }

            setButtonState("success");
            resetButton();
            logic_changePage(num);
        }

        return (
            <>
                <div className={`d-flex pos-relative ${styles["choose-page"]}`}>
                    <div onClick={() => setInputState(!inputState)}
                        className={`none-select cursor-pointer ${styles["three-dots"]}`}>{"..."}
                    </div>
                    <div className={`${styles["for-input"]}`}>
                        <Input showPage={`${inputState ? "open" : ""}`}
                            value={input}
                            onInput={e => setInput(e.target.value)}
                            classDiv={`page-input`}
                            placeholder={ "№ стр." }
                            type="text"
                            patter="[0-9]*"
                        />
                        <img className={`${styles["button-close"]} ${inputState ? styles.open : ""} transition_0_3 pos-absolute cursor-pointer ${input ? styles.hide : ""}`}
                        onClick={() => setInputState(!inputState)}
                            alt="close search" src="/assets/img/close.svg">
                        </img>
                        <img className={`${styles["go-page"]} pos-absolute cursor-pointer position_0_3 ${input ? styles.show : ""}`} 
                            alt="forward page" src="/assets/img/go-page.svg" onClick={()=>{applyFastForward(), setInput("")}}>
                        </img>
                        <div 
                            className={`btn-search-page ${inputState ? "open" : ""} ${buttonState}`}>
                        </div>
                    </div>
                </div>
                <PageNumber number={dataLimit} />
            </>
        )
    }

    const DataColumns = () => {
        if (isDataEmpty(props.columns) || isDataEmpty(pages)) {
            return <></>
        }
        return props.columns.map((v, i) => <th key={`col-${i}`}>{v}</th>);
    }

    return (
        <>
            <CustomTable className={props.classTable}>
                <thead>
                    <tr>
                        <DataColumns/>
                    </tr>
                </thead>
                <tbody>
                    {!pagesTimeout ? renderData() : renderPlaceholder()}
                </tbody>
            </CustomTable>
            <Container noSelect={true}>
                <div className={`d-flex ${styles["for-pagination"]}`}>
                    <div className={`d-flex items-center ${styles.pagination}`}>
                        <Container disabled={isFirstPage} cursor={!isFirstPage} margin={true}>
                            <button {...props} onClick={() => goToPreviousPage()} className="d-flex items-center cursor-pointer transition_0_3">
                                <img className={`margin-auto`} alt='next page' src='/assets/img/arrow-back.png'></img>
                            </button>
                        </Container>
                        <div className='d-flex'>{props.children}
                            {
                                getPaginationGroup().map((v, i) => {
                                    return (
                                        <PageNumber key={"page-" + v} number={v} />
                                    )
                                })
                            }
                        </div>
                        <FastForward />
                        <Container disabled={isLastPage} cursor={!isLastPage} margin={true}>
                            <button {...props} onClick={() => goToNextPage()} className="d-flex items-center cursor-pointer transition_0_3">
                                <img className={styles['arrow-next']} alt='back page' src='/assets/img/arrow-next.png'></img>
                            </button>
                        </Container>
                    </div>
                </div>
            </Container>
        </>
    )
};

export default DataTable;