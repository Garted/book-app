import { useDispatch, useSelector } from 'react-redux';
import {
    setTitleFilter,
    selectTitleFilter,
    resetFilter,
    setAuthorFilter,
} from '../../redux/slices/filterSlice';
import './Filter.css';

const Filter = () => {
    const dispatch = useDispatch();
    const { title, author } = useSelector(selectTitleFilter);

    return (
        <div className="app-block filter">
            <div className="filter-group">
                <div className="filter-row">
                    <input
                        onChange={(e) => {
                            dispatch(setTitleFilter(e.target.value));
                        }}
                        value={title}
                        type="text"
                        placeholder="Filter by title..."
                    />
                    <input
                        onChange={(e) => {
                            dispatch(setAuthorFilter(e.target.value));
                        }}
                        value={author}
                        type="text"
                        placeholder="Filter by author..."
                    />
                    <button
                        type="button"
                        onClick={() => {
                            dispatch(resetFilter());
                        }}
                    >
                        Reset Filters
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Filter;
